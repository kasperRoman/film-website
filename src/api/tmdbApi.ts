
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
    search: (cate:Category, params?:object) =>{
        const url = 'search/' + CATEGORY[cate];
        return axiosClient.get(url,params)
    },
    details: (cate:Category,id:any, params?:object) =>{
        const url = CATEGORY[cate] + '/' + id  ;
        return axiosClient.get(url,params)
    },
    credits: (cate:Category,id:any) =>{
        const url = CATEGORY[cate] + '/' + id + '/credits'  ;
        return axiosClient.get(url,{params:{}})
    },
     similar: (cate:Category, id:any) =>{
        const url = CATEGORY[cate] + '/' +id +'/similar';
        return axiosClient.get(url,{params:{}})
    },

}

export default tmdbApi
