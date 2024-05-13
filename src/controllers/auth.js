/**
 * @desc Login a user
 */
export const login = async (req, res) => {
  try {
   
    // res.send({ "user", "token" });
  } catch (e) {
    res.status(400).send({
      error: { message: 'You have entered an invalid email or password' },
    });
  }
};
