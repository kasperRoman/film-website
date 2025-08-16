
import axiosClient from "./axiosClient";
import { Category,CATEGORY, MOVIE_TYPES, MovieType, TV_TYPES, TvType} from "../types/tmdbTypes"


const tmdbApi ={
    getMoviesList: (type:MovieType , params?:object) =>{
        const url = 'movie/' + MOVIE_TYPES[type];
        return axiosClient.get(url,params)
    },
    getTvList: (type:TvType , params?:object) =>{
        const url = 'tv/' + TV_TYPES[type];
        return axiosClient.get(url,params)
    },
    getVideos: (cate:Category, id:any) =>{
        const url = CATEGORY[cate] + '/' +id +'/videos';
        return axiosClient.get(url,{params:{}})
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
