import axios from "axios";

export default async function submitApplication(data) {
  try {
    const res = await axios.post("https://emailservice-qase.onrender.com/api/email/send", data);
    return res;
  } catch (err) {
    console.error("error sending mail:", err);
    throw err;
  }
}
