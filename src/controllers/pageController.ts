import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { creatMenuObject } from '../helpers/createMenuObject';

export const home = (req:Request,res:Response)=>{
    let list = Pet.getAll();
    res.render('pages/page',{
        menu: creatMenuObject('all'),
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list // array com os pets
    });
        
};
export const dogs = (req:Request,res:Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu: creatMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list // array com os dogs
    });
};
export const cats = (req:Request,res:Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu: creatMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list // array com os cats
    });
};

export const fishes = (req:Request,res:Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        menu: creatMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list // array com os fishes
    });
};