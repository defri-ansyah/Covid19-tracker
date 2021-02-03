import axios from 'axios'

export const fetchData = () => async (dispatch) => {
    const url = "https://covid19.mathdro.id/api";

    let selectedUrl = `${url}/countries/Indonesia`;

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(selectedUrl);
        dispatch({
            type: 'SET_DATA', payload: {
                confirmed,
                recovered,
                deaths,
                lastUpdate,
            }
        })

    } catch (error) {
        console.log(error);
    }
};