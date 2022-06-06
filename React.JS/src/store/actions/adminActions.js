import actionTypes from "./actionTypes";
import {
    getAllCodeService, createNewUserService, getAllUsers,
    deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService
} from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED

})
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData

})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED

})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
        }
    }
}
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user redux: ', res);
            if (res && res.errCode === 0) {
                toast.success('Create the new user succeed!')
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e);
        }
    }
}


export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error('Fetch all users error!')
                dispatch(fetchAllUsersFailed())
            }
        } catch (e) {
            toast.error('Fetch all users error!')

            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed error', e);
        }
    }
}
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED

})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user success")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Delete the users error!')
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error('Delete the users error!')

            dispatch(deleteUserFailed());
            console.log('saveUserFailed error', e);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success('Update the  user succeed!')
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Update the user error!")
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Update the user error!")
            dispatch(editUserFailed());
            console.log('EditUserFailed error', e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,

})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })

            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILDED', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
                })

            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILDED', e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
            })
        }
    }
}
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);

            if (res && res.errCode === 0) {
                toast.success("Save infor detail doctor success")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,

                })
            } else {
                toast.error("Save infor detail doctor Error")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                })

            }
        } catch (e) {
            toast.error("Save infor detail doctor Error")
            console.log('SAVE_DETAIL_DOCTOR_FAILDED', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
            })
        }
    }
}
