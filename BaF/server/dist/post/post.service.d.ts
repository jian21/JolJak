import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { User } from 'src/auth/user.entity';
import { Image } from 'src/image/image.entity';
export declare class PostService {
    private postRepository;
    private imageRepository;
    constructor(postRepository: Repository<Post>, imageRepository: Repository<Image>);
    getMyMarkers(user: User): Promise<Post[]>;
    private getPostsBaseQuery;
    private getPostsWithOrderImages;
    getMyPosts(page: number, user: User): Promise<{
        images: Image[];
        id: number;
        latitude: number;
        longitude: number;
        color: import("./marker-color.enum").MarkerColor;
        address: string;
        title: string;
        description: string;
        date: Date;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        user: User;
        favorites: import("../favorite/favorite.entity").Favorite[];
    }[]>;
    searchMyPostsByTitleAndAddress(query: string, page: number, user: User): Promise<{
        images: Image[];
        id: number;
        latitude: number;
        longitude: number;
        color: import("./marker-color.enum").MarkerColor;
        address: string;
        title: string;
        description: string;
        date: Date;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        user: User;
        favorites: import("../favorite/favorite.entity").Favorite[];
    }[]>;
    getPostById(id: number, user: User): Promise<{
        isFavorite: boolean;
        id: number;
        latitude: number;
        longitude: number;
        color: import("./marker-color.enum").MarkerColor;
        address: string;
        title: string;
        description: string;
        date: Date;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        user: User;
        images: Image[];
    }>;
    createPost(createPostDto: CreatePostDto, user: User): Promise<{
        id: number;
        latitude: number;
        longitude: number;
        color: import("./marker-color.enum").MarkerColor;
        address: string;
        title: string;
        description: string;
        date: Date;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        images: Image[];
        favorites: import("../favorite/favorite.entity").Favorite[];
    }>;
    deletePost(id: number, user: User): Promise<number>;
    updatePost(id: number, updatePostDto: Omit<CreatePostDto, 'latitude' | 'longitude' | 'address'>, user: User): Promise<{
        isFavorite: boolean;
        id: number;
        latitude: number;
        longitude: number;
        color: import("./marker-color.enum").MarkerColor;
        address: string;
        title: string;
        description: string;
        date: Date;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        user: User;
        images: Image[];
    }>;
    getPostsByMonth(year: number, month: number, user: User): Promise<any>;
}
