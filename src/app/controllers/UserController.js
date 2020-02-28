// import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    // const schema = Yup.object().shape({

    // });

    const UserExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (UserExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { email, name } = await User.create(req.body);

    return res.json({
      email,
      name,
    });
  }

  async index(req, res) {
    return res.json({ message: 'ok' });
  }
}

export default new UserController();
