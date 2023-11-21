//import { pb } from "../db/db"
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export async function load({locals}){

    const getProjects = async () =>{

        try{
            const projects = await locals.pb.collection('projects').getList(1, 20, { '$autoCancel': false }
            );
            return serializeNonPOJOs(projects)
        } catch (err){
            console.log(err)
            throw error(err.status, err.message);
        }
    }

    const getCourses = async () =>{

        try{
            const courses = await locals.pb.collection('courses').getList(1, 20, { '$autoCancel': false }
            );
            return serializeNonPOJOs(courses)
        } catch (err){
            console.log(err)
            throw error(err.status, err.message);
        }
    }

    const getChallenges = async () =>{

        try{
            const challenges = await locals.pb.collection('challenges').getList(1, 20, { '$autoCancel': false }
            );
            console.log(challenges.items[0].images[0])
            return serializeNonPOJOs(challenges)
        } catch (err){
            console.log(err)
            throw error(err.status, err.message);
        }
    }

    const getTutorials = async () =>{

        try{
            const tutorials = await locals.pb.collection('tutorials').getList(1, 20, { '$autoCancel': false }
            );
            return serializeNonPOJOs(tutorials)
        } catch (err){
            console.log(err)
            throw error(err.status, err.message);
        }
    }

    return {
        projects: getProjects(),
        tutorials: getTutorials(),
        courses: getCourses(),
        challenges: getChallenges()
    }
}