import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, Trash2, Package, Calendar, RefreshCw, Tag, Boxes } from 'lucide-react';
import { Product } from '../types';
import { getProduct,deleteProduct } from '../api/api';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(Number(id));
        setProduct(data);
        console.log('Products:', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
    

  }, [id]);

  const handleDelete = async() => {
    if (window.confirm('Are you sure you want to delete this product?')) {
         try {
           await deleteProduct(Number(id));
            navigate('/');
         } catch (error) {
           console.log(error)
         }
       }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">Product Details</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/product/edit/${id}`)}
              className="cursor-pointer flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Edit2 size={20} />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="cursor-pointer flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Trash2 size={20} />
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
            )}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="text-blue-600" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Product Name</div>
                    <div className="font-medium">{product.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="text-blue-600" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="font-medium">{product.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Boxes className="text-blue-600" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Stock</div>
                    <div className="font-medium">{product.stock} units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Description</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{product.description}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Information</h3>
              <div className="text-3xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Metadata</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Created At</div>
                    <div className="font-medium">{formatDate(product.createdAt)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="text-blue-600" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Last Updated</div>
                    <div className="font-medium">{formatDate(product.updatedAt)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}