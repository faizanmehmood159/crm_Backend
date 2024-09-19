const Widget = require('../../../models/widgets');

const getWidget = async (req, res) => {
  try {
    const widget = await Widget.find();
    console.log('Retrieved Quote:', widget);
    res.status(200).json(widget);
  } catch (err) {
    console.error('Error fetching widget:', err);
    res.status(500).json({ error: 'Failed to fetch widget' });
  }
};

module.exports = {getWidget};
