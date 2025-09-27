import Quote from '../database/quote-model.js';

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const qoute = await Quote.findById(id);
        if(!qoute){
            return res.status(404).json({ error: 'Quote not found' });
        }
        res.json(qoute);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const postQuote = async (req, res) => {
    const { name, quote, author } = req.body;
    try {
        const newQoute = new Quote({name, quote, author});
        await newQoute.save();
        res.status(201).json(newQoute);
    }catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteQuote = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedQoute = await Quote.findByIdAndDelete(id);
        if(!deletedQoute){
            return res.status(404).json({ error: 'Quote not found' });
            }
        res.status(204).send();
    }catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const updateQuote = async (req, res) => {
    const {id} = req.params;
    const { name, quote, author } = req.body;
    try {
        const updatedQoute = await Quote.findByIdAndUpdate(id, { name, quote, author }, { new: true, runValidators: true });
        if(!updatedQoute){
            return res.status(404).json({ error: 'Quote not found' });
        }
        res.json(updatedQoute);
    }catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}