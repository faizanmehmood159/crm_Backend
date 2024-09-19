const Widget = require('../../../models/widgets')

const deleteWidget = async (req, res) => {
    try {
      const { id } = req.params;
  
      const widget = await Widget.findByIdAndDelete(id);
  
      if (!widget) {
        return res.status(404).json({ error: "Widget not found" });
      }
  
      console.log("Deleted Successfully: ", widget);
      res.status(200).json({
        message: "Widget deleted successfully",
        widget,
      });
    } catch (err) {
      console.error("Error deleting widget:", err);
      res.status(500).json({ error: "Failed to delete widget" });
    }
  };
  
  module.exports = { deleteWidget };
  