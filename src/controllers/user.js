import User from "../models/user";


export const userById = async(req, res) => {
    const filter = {_id: req.params.id}
    try {
        const user = await User.findOne(filter)
        res.json(user)
    } catch (error) {
         res.status(400).json({
                error: "Khong tim thay user"
         })

    }
}



// API list user
export const list = async(req, res) => {
    try {
        // const products = await Product.find();
        const users = await User.find().sort({ createAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được "
        })
    }
}

// API xóa user
export const remove = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await User.findOneAndDelete(condition);
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được"
        })
    }
}