import React, { createContext, useCallback, useContext, useState } from 'react';

interface Product {
  id: number;
  image_url: string;
  title: string;
  price: number;
  description: string;
}

interface ProductContextData {
  product: Product;
  setActualProduct(product: Product): void;
  modalVisible: boolean;
  handleShowModal(): void;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [modalVisible, setModalvisible] = useState(false);

  const handleShowModal = useCallback(() => {
    setModalvisible(!modalVisible);
  }, [modalVisible]);

  const setActualProduct = useCallback((actualProduct: Product) => {
    setProduct(actualProduct);
  }, []);

  return (
    <ProductContext.Provider
      value={{ product, handleShowModal, modalVisible, setActualProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProductContext(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ProductProvider, useProductContext };
