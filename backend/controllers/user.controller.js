import User from "../models/user.model.js"    

export const userController = async (req, res) => {
    try {
        const { name, email, service, message, contact } = req.body;
        
        // Basic validation - only check for required fields
        if (!contact) {
            return res.status(400).json({ 
                success: false,
                message: "Contact number is required" 
            });
        }

        // Prepare user data - only include email if it has a value
        const userData = {
            name: name || 'Website Visitor',
            service: service || 'General Inquiry',
            message: message || '',
            contact: contact.toString().trim()
        };

        // Only add email if it exists and is not empty
        if (email && email.trim()) {
            userData.email = email.trim();
        }

        const user = new User(userData);
        await user.save();
        
        res.status(201).json({
            success: true,
            message: "Thank you for contacting us! We'll get back to you soon.",
            data: user
        });
    } catch (err) {
        console.error('Error in userController:', err);
        
        // Handle duplicate key error (unique email)
       

    

        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
}