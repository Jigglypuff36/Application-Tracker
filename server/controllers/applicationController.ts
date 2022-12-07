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
        const { id, appId } = req.params;
        const { companyName, jobDescription, status } = req.body
        const editApplication = [companyName, jobDescription, status];
        //need to add into application table an id for each application that is being added
        const text = `update application set company_name='${companyName}', job_description='${jobDescription}', status='${status}' where application_id=${id} and id=${appId}`;
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

    getApplications: async (req: Request, res: Response, next: NextFunction) => {
        //application id
        const { id } = req.params;
        console.log(id);
        //need to add into application table an id for each application that is being added
        const text = `select * from application where application_id=${id}`;
        try{
            const applications = await db.query(text);
            res.locals.applications = applications.rows;
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

