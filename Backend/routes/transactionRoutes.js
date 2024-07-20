const router = require("express").Router();
const Transaction = require("../transactionSchema");

// CREATE A TRANSACTION
router.post('/add', async (req, res) => {
    const newTransaction = new Transaction(req.body);
    try {
        const savedTransaction = await newTransaction.save();
        res.status(200).json({ success: true, data: savedTransaction });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE A TRANSACTION
router.delete('/:id', async (req, res) => {
    try {
        const result = await Transaction.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        res.status(200).json({ success: true, message: "Transaction deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// UPDATE A TRANSACTION
router.put("/:id", async (req, res) => {
    try {
        const updateTransaction = await Transaction.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        if (!updateTransaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }
        res.status(200).json({ success: true, message: "Transaction updated successfully", data: updateTransaction });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// GET TRANSACTION
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({ success: true, data: transactions });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
