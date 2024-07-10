import express from 'express';
import { getItem, getItems } from '../controllers/itemsController.js';
const Router = express.Router();


// Get all items
Router.get('/', getItems);

// Get item information
Router.get('/:id', getItem);


export default Router;