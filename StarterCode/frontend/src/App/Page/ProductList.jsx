import React, { useEffect, useState, useCallback } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

    //implement the get products function
    const fetchProducts = useCallback(async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    //implement the delete function
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }}>
                Simple Card List
            </Typography>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '100%'
            }}>
                {products.map(product => (
                    <Card key={product.id} style={{
                        width: 300,
                        margin: '10px',
                        position: 'relative'
                    }}>
                        <IconButton
                            onClick={() => handleDelete(product.id)}
                            style={{ position: 'absolute', left: 10, top: 10, zIndex: 1 }}
                            color="error"
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.imageUrl || 'https://via.placeholder.com/200'}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="body1">
                                ${product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ProductList;
