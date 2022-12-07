import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const express = require('express');
import {db} from '../models/model';

export const applicationController = {
    addApplication: async (req: Request, res: Response, next: NextFunction) => {
        //application id
        const { id } = req.params;
        const { companyName, jobDescription, status } = req.body
        const newDate = new Date().toString();
        console.log(newDate)
        const newApplication = [id, companyName, jobDescription, status, newDate];
        const text = `insert into application (application_id, company_name, job_description, status, date) values ('${id}', '${companyName}', '${jobDescription}', '${status}', '${newDate}')`;
        try{
            await db.query(text);
            return next();
        }
        catch(err){
            return next({
                log: `Error in application.addApplication: ${err}`,
                status: 500,
                message: 'Error occured while adding application data',
              }); 
        }
    },

    updateApplication: async (req: Request, res: Response, next: NextFunction) => {
        //application id
        const { id } = req.params;
        const { companyName, jobDescription, status } = req.body
        const editApplication = [id, companyName, jobDescription, status];
        //need to add into application table an id for each application that is being added
        const text = `insert into application (application_id, company_name, job_description, resume_version, status) where user_id=${id} values ($1, $2, $3, $4, $5)`;
        try{
            await db.query(text);
            return next();
        }
        catch(err){
            return next({
                log: `Error in application.addApplication: ${err}`,
                status: 500,
                message: 'Error occured while adding application data',
              }); 
        }
    },
    
};

