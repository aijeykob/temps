import axios from "axios";


export const WRITE_TEXT = "WRITE_TEXT";
export const SET_IMG = "SET_IMG";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_HERO_FOR_UPDATE = "SET_HERO_FOR_UPDATE";
export const CLEAR_PROPS = "CLEAR_PROPS";
export const PAGINATION_TO_PROPS = "PAGINATION_TO_PROPS";
export const PAGINATION_START = "PAGINATION_START";
export const DELETE_HERO = "DELETE_HERO";

const apiUrl = "//localhost:4000/";


export const updateOrCreateHero = ({ nickname, real_name, origin_description, superpowers, catch_phrase, heroImage, _id, currentPage, method }) => dispatch => {

    const formData = new FormData();
    if (heroImage !== undefined) {
        formData.append('heroImage', heroImage)
    }
    formData.append('nickname', nickname);
    formData.append('real_name', real_name);
    formData.append('origin_description', origin_description);
    formData.append('superpowers', superpowers);
    formData.append('catch_phrase', catch_phrase);
    (method === "put") ?
        axios
            .put(`${apiUrl}api/upload/${_id}`, formData)
            .then(res => {
                // dispatch(pagination(currentPage))
            }) :
        axios
            .post(`${apiUrl}api/upload`, formData)
            .then(res => {
                // dispatch(pagination(1))
            })

}




// export const deleteHero = (_id, filename, currentPage) => dispatch => {

//     axios
//         .delete(`${apiUrl}api/upload/${_id}`, {data: {filename}})
//         .then(res => {
//             dispatch(pagination(currentPage))
//         })
// };

// export const pagination = (currentPage) => dispatch => {
//     axios.get(`${apiUrl}api/ViewHeroes?page=${currentPage}`,)
//         .then(res => {
//             dispatch(paginationToProps(res.data))


//         })
// };




export const deleteHero = (_id, filename, currentPage) => ({
    type: DELETE_HERO, payload: _id, filename, currentPage

});
export const paginationStart = (currentPage) => ({
    type: PAGINATION_START, payload: currentPage
});

export const paginationToProps = data => ({
    type: PAGINATION_TO_PROPS, payload: data
});


export const clearProps = clear => ({
    type: CLEAR_PROPS, payload: clear
});

export const setShowModal = show => ({
    type: SET_SHOW_MODAL, payload: show
});

export const setImg = file => ({
    type: SET_IMG, payload: file
});

export const setHeroForUpdate = HeroForUpdate => ({

    type: SET_HERO_FOR_UPDATE, payload: HeroForUpdate
});

export const writingText = (text, field) => ({

    type: WRITE_TEXT, payload: text, field
});































































