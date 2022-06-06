
import { render } from 'express/lib/response';
import db from '../models/index'
import CRUDSevice from '../services/CRUDSevice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e);
    }

}
let gettest = (req, res) => {
    return res.render('test/test.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDSevice.CreateNewUser(req.body);
    console.log(message);
    return res.send('post crud from sever');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDSevice.getAllUser();

    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDSevice.getUserInfoById(userId);

        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found !')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDSevice.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })


}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDSevice.deleteUserById(id);
        return res.send("Delete success!");
    }
    else {
        return res.send("Delete not found!")
    }
}
module.exports = {
    getHomePage: getHomePage,
    gettest: gettest,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}