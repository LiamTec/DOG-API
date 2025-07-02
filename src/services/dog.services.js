import axios from "axios";
export const getDog = async () => {
    try{
        const response = await axios({
            method: "GET",
            url: "https://dog.ceo/api/breeds/image/random",
            headers: {
                accept: "application/json",
            }
        });
            return response.data.message;
    } catch (error) {
        console.error("Error perros", error);
        return [];
    }
}