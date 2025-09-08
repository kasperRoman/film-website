
import axiosClient from "./axiosClient";
import { Category,CATEGORY, MOVIE_TYPES, MovieType, TV_TYPES, TvType} from "../types/tmdbTypes"
import { IResponseModel } from "../types/IResponseModel";
import { IMovie } from "../types/IMovie";
import { IResponseVideo } from "../types/IResponseVideo";
import { ITv } from "../types/ITv";


const tmdbApi ={
    getMoviesList: async (type:MovieType , params?:object):Promise<IResponseModel<IMovie>> =>{
        const url = 'movie/' + MOVIE_TYPES[type];
        const response = await axiosClient.get<IResponseModel<IMovie>>(url,params)
        return response.data
    },
    getTvList: async (type:TvType , params?:object):Promise<IResponseModel<ITv>> =>{
        const url = 'tv/' + TV_TYPES[type];
        const response = await axiosClient.get<IResponseModel<ITv>>(url,params)
        return response.data
        
    },
    getVideos:async (cate:Category, id:number):Promise<IResponseVideo> =>{
        const url = CATEGORY[cate] + '/' +id +'/videos';
        const response = await axiosClient.get<IResponseVideo>(url,{params:{}})
        return response.data
       
    },
    search: async (cate:Category, params?:object) =>{
        const url = 'search/' + CATEGORY[cate];
        const response = await axiosClient.get(url,params)
        return response.data
        
    },
    details: async(cate:Category,id:string, params?:object) =>{
        const url = CATEGORY[cate] + '/' + id  ;
        const response = await axiosClient.get(url,params)
        return response.data
     
    },
    credits: async (cate:Category,id:number) =>{
        const url = CATEGORY[cate] + '/' + id + '/credits'  ;
        const responce = await axiosClient.get(url,{params:{}})
        return responce.data
    
    },
     similar: async (cate:Category, id:any) =>{
        const url = CATEGORY[cate] + '/' +id +'/similar';
        const response = axiosClient.get(url,{params:{}});
        return (await response).data
        
    },

}

export default tmdbApi
