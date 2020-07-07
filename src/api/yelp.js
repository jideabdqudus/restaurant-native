import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer FYii8Ju7OZbl1R9Q250-qwHMIGOp4D3Xdzqy3Hsv9wCc7qCkoP33H4fP8PMTrMIa-r7ZOOnxaW-SRNhx8ru5quNlyGczOiCrXEvuGX1761O-iILUW9lOVDFrj4sEX3Yx"
    }
})