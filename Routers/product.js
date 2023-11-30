import express from "express";
import { Product, Transaction} from "../Controllers/product.js";

const router = express.Router();

router.get("/all", async (req, res) => {
     try{
        const products = await Product.find().lean();
        res.json(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

   /* router.get('/tran', async (req, res) => {
        const page = parseInt(req.query.page, 10) || 1;
        const perPage = parseInt(req.query.perPage, 10) || 10;
        const search = req.query.search || '';
      
        const query = {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { price: { $regex: search, $options: 'i' } },
          ],
        };
      
        try {
          const transactions = await Transaction.find(query)
            .skip((page - 1) * perPage)
            .limit(perPage);
      
          const totalItems = await Transaction.countDocuments(query);
          const totalPages = Math.ceil(totalItems / perPage);
      
          res.json({
            transactions,
            page,
            perPage,
            totalPages,
            totalItems,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      router.get('/api/bar-chart', (req, res) => {
        const selectedMonth = req.query.month; // Assuming the month is passed as a query parameter
        fetch("./data.json")
        .then((response) => response.json())
        .then((result) => ((result.data)));
        // Filter data for the selected month
        const selectedMonthData = data.filter(item => item.date.startsWith(selectedMonth));
    
        // Count the number of items in each price range
        const priceRanges = ['0 - 100', '101 - 200', '201 - 300', '301 - 400', '401 - 500', '501 - 600', '601 - 700', '701 - 800', '801 - 900', '901 - above'];
        const countPerRange = Object.fromEntries(priceRanges.map(range => [range, 0]));
    
        selectedMonthData.forEach(item => {
            const priceRange = getPriceRange(item.price);
            countPerRange[priceRange]++;
        });
    
        // Prepare response
        const responseData = priceRanges.map(range => ({ priceRange, count: countPerRange[range] }));
    
        res.json(responseData);
    })
    
        // Function to get items by category for the selected month
const getItemsByCategory = (selectedMonth) => {
    const result = {};
    data.forEach(entry => {
        const month = entry.date.split('-')[1];
        if (month === selectedMonth) {
            result[entry.category] = (result[entry.category] || 0) + 1;
        }
    });
    return result;
};
// API endpoint for pie chart
router.get('/pie-chart', (req, res) => {
    const selectedMonth = req.query.month;

    if (!selectedMonth) {
        return res.status(400).json({ error: 'Month parameter is required' });
    }

    const itemsByCategory = getItemsByCategory(selectedMonth);
    const result = Object.entries(itemsByCategory).map(([category, count]) => ({ category, items: count }));

    res.json(result);
});
*/

export const productsRouter = router;