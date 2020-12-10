import React, { Component } from 'react';
import './Challenge.css';
import axios from 'axios';

export default class Challenge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      equityResearch: [
        {
            "_id": "5efe5c7ee7179a27b1646ed9",
            "name": "Perception, Equity and Accessibility: Comparing Student and Professional Perspectives on Game Development Courses",
            "nameShort": "perception-equity-and-accessibility-comparing-student-and-professional-perspectives-on-game-development-courses",
            "brief": "Professional game designers and middle school students both see value in bringing game design into classrooms.",
            "description": "With the games industry now rivaling the size of Hollywood, students are increasingly setting their career-sights on jobs making games. The professional and cultural relevance of video games are leading educators to find the elements of games and game creation that prepare interested students for a potential career, and also provide skill development and value to everyone else. Programs that run today are largely experimental and seeking out the balance between the fun of games and the learning that comes from them. Our work in the games industry, and the topic of this panel, is focused on the act of game creation and three primary questions: what does it mean to make a game? How accessible is game creation to students? And how do we address equity issues in games? We plan to share the insights we have gained through our research and the programs we have run, all focused on finding out what really happens when kids make games.",
            "headerImageUrl": "https://f10-image.s3-us-west-2.amazonaws.com/New+Site/Research/perception+equity%2C+and+accessibility+-+comparing+student+and+professional+perspectives+on+game+development+courses/perception+header.jpg",
            "researchCardImageUrl": "https://f10-image.s3-us-west-2.amazonaws.com/New+Site/Research/perception+equity%2C+and+accessibility+-+comparing+student+and+professional+perspectives+on+game+development+courses/perception.jpg",
            "researchType": "article",
            "datePublished": "2016-08-13T00:00:00.000Z",
            "programs": [
                "5b19d1f24c600f34a3971cd9"
            ],
            "subjectAreas": [
                "5ac806d610f6bb1328fb589d"
            ],
            "focusConcepts": [
                "5ac810a69248c61576ede14c"
            ],
            "people": [
                "5ac80270b1e53c119a832a24",
                "5ac80309d110e411fa57085a"
            ],
            "videoUrl": [],
            "documentUrl": [
                {
                    "name": "Perception, Equity, and Accessibility",
                    "thumbnailUrl": "https://s3-us-west-2.amazonaws.com/f10-research/previews/general-preview-3.jpg",
                    "url": "https://drive.google.com/file/d/11HXWIZwQgmO2Ud0wji3dMWQD6Eanmk5V/view",
                    "type": "pdf"
                }
            ],
            "url": [],
            "imageUrl": [],
            "tags": [
                {
                    "name": "article",
                    "_id": "5b1ed05cd709885a1144a057"
                },
                {
                    "name": "Games and Learning",
                    "_id": "5b1ed05cd709885a1144a056"
                },
                {
                    "name": "Lisa Castaneda",
                    "_id": "5b1ed05cd709885a1144a055"
                },
                {
                    "name": "Tom Swanson",
                    "_id": "5b1ed05cd709885a1144a054"
                },
                {
                    "name": "Game Design and Learning",
                    "_id": "5b1ed05cd709885a1144a053"
                },
                {
                    "name": "Novice vs Expert Learning",
                    "_id": "5b1ed05cd709885a1144a052"
                }
            ],
            "__v": 0,
            "allPeople": [
                {
                    "_id": "5ac80270b1e53c119a832a24",
                    "name": "Lisa Castaneda",
                    "nameShort": "lisa-castaneda",
                    "title": "Co-Founder and CEO",
                    "phone": "1234567890",
                    "email": "info@foundry10.org",
                    "bio": "Foundry10 is led by an experienced educator named Lisa Castaneda. Lisa has a Master’s Degree in Education, a Bachelor’s of Science in Psychology, and over 10 years of experience teaching in K-8 schools, as well as experience working in several other fields. Lisa created foundry10 as a place for individuals to discover and develop their unique passions, interests, and skills.",
                    "photo": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/lisa.jpg",
                    "placeholderPhoto": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/lisa.jpg",
                    "fullBody": "https://s3-us-west-2.amazonaws.com/f10-people/Unfiltered+Full+Body+Team+Photos/Lisa.png",
                    "programs": [
                        "5aebb9ff4b18e60de78272b3",
                        "5aebba234b18e60de78272b4",
                        "5aebba444b18e60de78272b5",
                        "5aebba5c4b18e60de78272b6",
                        "5aebba724b18e60de78272b7",
                        "5aebbfbb4b18e60de78272cf",
                        "5aebbfe54b18e60de78272d0",
                        "5aebc01f4b18e60de78272d1",
                        "5aebc0624b18e60de78272d2",
                        "5aebc1924b18e60de78272d4",
                        "5aebc1fd4b18e60de78272d6",
                        "5aebc21e4b18e60de78272d7",
                        "5aebc2394b18e60de78272d8",
                        "5aebc2a64b18e60de78272db",
                        "5aebc2c34b18e60de78272dc",
                        "5aebc3044b18e60de78272de",
                        "5aebc31e4b18e60de78272df",
                        "5aebc34a4b18e60de78272e0",
                        "5af26877f278377d966edc40",
                        "5af269ddf278377d966edc43",
                        "5af26a51f278377d966edc44",
                        "5af26a92f278377d966edc45",
                        "5af26aeff278377d966edc46",
                        "5af26b52f278377d966edc47",
                        "5b19ccf34c600f34a3971cbf",
                        "5b19d00f4c600f34a3971cd2",
                        "5b19d0974c600f34a3971cd3",
                        "5b19d1914c600f34a3971cd7",
                        "5b19d2134c600f34a3971cda",
                        "5b19d34e4c600f34a3971ce1",
                        "5b19d36e4c600f34a3971ce2",
                        "5b19d3bc4c600f34a3971ce4",
                        "5b19d3db4c600f34a3971ce5",
                        "5b19d3f54c600f34a3971ce6",
                        "5b19d4964c600f34a3971ce9",
                        "5b19d4b74c600f34a3971cea",
                        "5b19d51b4c600f34a3971ceb",
                        "5b19d5464c600f34a3971cec",
                        "5b19d5664c600f34a3971ced",
                        "5b19d5b74c600f34a3971cee",
                        "5b19d5d64c600f34a3971cef",
                        "5b19d5ec4c600f34a3971cf0",
                        "5b19d6ac4c600f34a3971cf4"
                    ],
                    "subjectAreas": [
                        "5ac803ff144e7b1250c77bdc",
                        "5ac8045182a9fb126c2c79e6",
                        "5ac8045182a9fb126c2c79e9",
                        "5ac806d610f6bb1328fb589e",
                        "5b7dc4d1ee1e76c762e8f4e2",
                        "5cf833f5e7179a6896b25b13"
                    ],
                    "research": [
                        "5bff3d80e7179a6ca07ed48f",
                        "5bff337ce7179a6ca07ed11d",
                        "5b1ebecbd709885a11449f56",
                        "5b1ebf73d709885a11449f67",
                        "5b1ec7c1d709885a11449f84",
                        "5b1ec800d709885a11449f8f",
                        "5b1ecc94d709885a1144a001",
                        "5b1ecd5ad709885a1144a011",
                        "5b1ece28d709885a1144a018",
                        "5b1ecec8d709885a1144a026",
                        "5b1ecf18d709885a1144a02d",
                        "5b1ecf9cd709885a1144a03b",
                        "5b1ecfded709885a1144a042",
                        "5b1ed010d709885a1144a049",
                        "5b1ed05cd709885a1144a051",
                        "5b1ed092d709885a1144a058",
                        "5b1ed107d709885a1144a05e",
                        "5b1ed57dd709885a1144a085",
                        "5b1ee110d709885a1144a0b1",
                        "5b1ee147d709885a1144a0bf",
                        "5b1ee1b0d709885a1144a0d7",
                        "5b1ee1f0d709885a1144a0e4",
                        "5b1ee2d4d709885a1144a0f1",
                        "5b1ee34fd709885a1144a107",
                        "5b1ee38cd709885a1144a112",
                        "5b1ee4f3d709885a1144a11e",
                        "5b1ee524d709885a1144a12a",
                        "5b1ee55fd709885a1144a136",
                        "5b1ee678d709885a1144a143",
                        "5b1ee6aed709885a1144a150",
                        "5b1ee7b7d709885a1144a15c",
                        "5b1edeeed709885a1144a09e",
                        "5b80747682caa4001475d666",
                        "5b80747e82caa4001475d66d",
                        "5c3e6108fb6fc0600be12bfe"
                    ],
                    "researchOwned": [],
                    "__v": 0
                },
                {
                    "_id": "5ac80309d110e411fa57085a",
                    "name": "Tom Swanson",
                    "nameShort": "tom-swanson",
                    "title": "Org Growth and Outreach",
                    "phone": "1234567890",
                    "email": "info@foundry10.org",
                    "bio": "Tom received his bachelor’s degree in Business Administration and Marketing from the University of Washington. He has worked on everything from small local clients to large-scale and multinational businesses. In his spare time, Tom works with independent and small game developers around Seattle to help them hone their business development and marketing practices. His involvement with foundry10 began in the very early stages of the company’s growth. While initially brought in to help with marketing, Tom quickly expanded into program design and development. His own love for learning and experiences in education drive him to seek innovation and growth for foundry10 and its students.",
                    "photo": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/tom.jpg",
                    "placeholderPhoto": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/tom.jpg",
                    "fullBody": "https://s3-us-west-2.amazonaws.com/f10-people/Unfiltered+Full+Body+Team+Photos/TOM.png",
                    "programs": [
                        "5ae760762a6d8490f0e21138",
                        "5aebb9ff4b18e60de78272b3",
                        "5aebba234b18e60de78272b4",
                        "5aebba444b18e60de78272b5",
                        "5aebba5c4b18e60de78272b6",
                        "5aebba724b18e60de78272b7",
                        "5aebbc754b18e60de78272c1",
                        "5aebbc954b18e60de78272c2",
                        "5aebbcb24b18e60de78272c3",
                        "5aebbcce4b18e60de78272c4",
                        "5aebbd094b18e60de78272c5",
                        "5aebbd224b18e60de78272c6",
                        "5aebbd414b18e60de78272c7",
                        "5aebbd7e4b18e60de78272c8",
                        "5aebbdad4b18e60de78272c9",
                        "5aebbdc84b18e60de78272ca",
                        "5aebbdf94b18e60de78272cb",
                        "5aebbe1f4b18e60de78272cc",
                        "5aebbe474b18e60de78272cd",
                        "5af26bf7f278377d966edc48",
                        "5b15b1def5b1c90bca8fbdd5",
                        "5b19cc1f4c600f34a3971cbc",
                        "5b19cc3e4c600f34a3971cbd",
                        "5b19ccf34c600f34a3971cbf",
                        "5b19cd114c600f34a3971cc0",
                        "5b19cd494c600f34a3971cc1",
                        "5b19cd784c600f34a3971cc2",
                        "5b19cd9a4c600f34a3971cc3",
                        "5b19d12d4c600f34a3971cd6",
                        "5b19d1914c600f34a3971cd7",
                        "5b19d1f24c600f34a3971cd9",
                        "5b19d2134c600f34a3971cda",
                        "5b19d2464c600f34a3971cdb",
                        "5b19d2674c600f34a3971cdc",
                        "5b19d28d4c600f34a3971cdd",
                        "5b19d2b54c600f34a3971cde",
                        "5b19d2d14c600f34a3971cdf",
                        "5b19d2ef4c600f34a3971ce0",
                        "5b1edfa7d709885a1144a0a7",
                        "5b1ef306d709885a1144a169"
                    ],
                    "subjectAreas": [
                        "5ac8045182a9fb126c2c79e6",
                        "5ac8045182a9fb126c2c79e8",
                        "5ac806d610f6bb1328fb589d",
                        "5ac806d610f6bb1328fb58a0",
                        "5ac8074e10f6bb1328fb58a9"
                    ],
                    "research": [
                        "5b1ec8c8d709885a11449f9b",
                        "5b1ece77d709885a1144a01e",
                        "5b1ecec8d709885a1144a026",
                        "5b1ecf5cd709885a1144a033",
                        "5b1ed010d709885a1144a049",
                        "5b1ed05cd709885a1144a051",
                        "5b1ed107d709885a1144a05e",
                        "5b1ed441d709885a1144a072",
                        "5b1ed4f2d709885a1144a07b",
                        "5b1edeeed709885a1144a09e",
                        "5b1ee070d709885a1144a0a8",
                        "5b1ee185d709885a1144a0cb",
                        "5b1ee2d4d709885a1144a0f1",
                        "5b1ee524d709885a1144a12a",
                        "5b1ee55fd709885a1144a136",
                        "5b1ee678d709885a1144a143",
                        "5b1ee6aed709885a1144a150",
                        "5b1ee7b7d709885a1144a15c"
                    ],
                    "researchOwned": [],
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5efe5c7ee7179a27b1646ed9",
            "name": "Perception, Equity and Accessibility: Comparing Student and Professional Perspectives on Game Development Courses",
            "nameShort": "perception-equity-and-accessibility-comparing-student-and-professional-perspectives-on-game-development-courses",
            "brief": "Professional game designers and middle school students both see value in bringing game design into classrooms.",
            "description": "With the games industry now rivaling the size of Hollywood, students are increasingly setting their career-sights on jobs making games. The professional and cultural relevance of video games are leading educators to find the elements of games and game creation that prepare interested students for a potential career, and also provide skill development and value to everyone else. Programs that run today are largely experimental and seeking out the balance between the fun of games and the learning that comes from them. Our work in the games industry, and the topic of this panel, is focused on the act of game creation and three primary questions: what does it mean to make a game? How accessible is game creation to students? And how do we address equity issues in games? We plan to share the insights we have gained through our research and the programs we have run, all focused on finding out what really happens when kids make games.",
            "headerImageUrl": "https://f10-image.s3-us-west-2.amazonaws.com/New+Site/Research/perception+equity%2C+and+accessibility+-+comparing+student+and+professional+perspectives+on+game+development+courses/perception+header.jpg",
            "researchCardImageUrl": "https://f10-image.s3-us-west-2.amazonaws.com/New+Site/Research/perception+equity%2C+and+accessibility+-+comparing+student+and+professional+perspectives+on+game+development+courses/perception.jpg",
            "researchType": "article",
            "datePublished": "2016-08-13T00:00:00.000Z",
            "programs": [
                "5b19d1f24c600f34a3971cd9"
            ],
            "subjectAreas": [
                "5ac806d610f6bb1328fb589d"
            ],
            "focusConcepts": [
                "5ac810a69248c61576ede14c"
            ],
            "people": [
                "5ac80270b1e53c119a832a24",
                "5ac80309d110e411fa57085a"
            ],
            "videoUrl": [],
            "documentUrl": [
                {
                    "name": "Perception, Equity, and Accessibility",
                    "thumbnailUrl": "https://s3-us-west-2.amazonaws.com/f10-research/previews/general-preview-3.jpg",
                    "url": "https://drive.google.com/file/d/11HXWIZwQgmO2Ud0wji3dMWQD6Eanmk5V/view",
                    "type": "pdf"
                }
            ],
            "url": [],
            "imageUrl": [],
            "tags": [
                {
                    "name": "article",
                    "_id": "5b1ed05cd709885a1144a057"
                },
                {
                    "name": "Games and Learning",
                    "_id": "5b1ed05cd709885a1144a056"
                },
                {
                    "name": "Lisa Castaneda",
                    "_id": "5b1ed05cd709885a1144a055"
                },
                {
                    "name": "Tom Swanson",
                    "_id": "5b1ed05cd709885a1144a054"
                },
                {
                    "name": "Game Design and Learning",
                    "_id": "5b1ed05cd709885a1144a053"
                },
                {
                    "name": "Novice vs Expert Learning",
                    "_id": "5b1ed05cd709885a1144a052"
                }
            ],
            "__v": 0,
            "allPeople": [
                {
                    "_id": "5ac80270b1e53c119a832a24",
                    "name": "Lisa Castaneda",
                    "nameShort": "lisa-castaneda",
                    "title": "Co-Founder and CEO",
                    "phone": "1234567890",
                    "email": "info@foundry10.org",
                    "bio": "Foundry10 is led by an experienced educator named Lisa Castaneda. Lisa has a Master’s Degree in Education, a Bachelor’s of Science in Psychology, and over 10 years of experience teaching in K-8 schools, as well as experience working in several other fields. Lisa created foundry10 as a place for individuals to discover and develop their unique passions, interests, and skills.",
                    "photo": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/lisa.jpg",
                    "placeholderPhoto": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/lisa.jpg",
                    "fullBody": "https://s3-us-west-2.amazonaws.com/f10-people/Unfiltered+Full+Body+Team+Photos/Lisa.png",
                    "programs": [
                        "5aebb9ff4b18e60de78272b3",
                        "5aebba234b18e60de78272b4",
                        "5aebba444b18e60de78272b5",
                        "5aebba5c4b18e60de78272b6",
                        "5aebba724b18e60de78272b7",
                        "5aebbfbb4b18e60de78272cf",
                        "5aebbfe54b18e60de78272d0",
                        "5aebc01f4b18e60de78272d1",
                        "5aebc0624b18e60de78272d2",
                        "5aebc1924b18e60de78272d4",
                        "5aebc1fd4b18e60de78272d6",
                        "5aebc21e4b18e60de78272d7",
                        "5aebc2394b18e60de78272d8",
                        "5aebc2a64b18e60de78272db",
                        "5aebc2c34b18e60de78272dc",
                        "5aebc3044b18e60de78272de",
                        "5aebc31e4b18e60de78272df",
                        "5aebc34a4b18e60de78272e0",
                        "5af26877f278377d966edc40",
                        "5af269ddf278377d966edc43",
                        "5af26a51f278377d966edc44",
                        "5af26a92f278377d966edc45",
                        "5af26aeff278377d966edc46",
                        "5af26b52f278377d966edc47",
                        "5b19ccf34c600f34a3971cbf",
                        "5b19d00f4c600f34a3971cd2",
                        "5b19d0974c600f34a3971cd3",
                        "5b19d1914c600f34a3971cd7",
                        "5b19d2134c600f34a3971cda",
                        "5b19d34e4c600f34a3971ce1",
                        "5b19d36e4c600f34a3971ce2",
                        "5b19d3bc4c600f34a3971ce4",
                        "5b19d3db4c600f34a3971ce5",
                        "5b19d3f54c600f34a3971ce6",
                        "5b19d4964c600f34a3971ce9",
                        "5b19d4b74c600f34a3971cea",
                        "5b19d51b4c600f34a3971ceb",
                        "5b19d5464c600f34a3971cec",
                        "5b19d5664c600f34a3971ced",
                        "5b19d5b74c600f34a3971cee",
                        "5b19d5d64c600f34a3971cef",
                        "5b19d5ec4c600f34a3971cf0",
                        "5b19d6ac4c600f34a3971cf4"
                    ],
                    "subjectAreas": [
                        "5ac803ff144e7b1250c77bdc",
                        "5ac8045182a9fb126c2c79e6",
                        "5ac8045182a9fb126c2c79e9",
                        "5ac806d610f6bb1328fb589e",
                        "5b7dc4d1ee1e76c762e8f4e2",
                        "5cf833f5e7179a6896b25b13"
                    ],
                    "research": [
                        "5bff3d80e7179a6ca07ed48f",
                        "5bff337ce7179a6ca07ed11d",
                        "5b1ebecbd709885a11449f56",
                        "5b1ebf73d709885a11449f67",
                        "5b1ec7c1d709885a11449f84",
                        "5b1ec800d709885a11449f8f",
                        "5b1ecc94d709885a1144a001",
                        "5b1ecd5ad709885a1144a011",
                        "5b1ece28d709885a1144a018",
                        "5b1ecec8d709885a1144a026",
                        "5b1ecf18d709885a1144a02d",
                        "5b1ecf9cd709885a1144a03b",
                        "5b1ecfded709885a1144a042",
                        "5b1ed010d709885a1144a049",
                        "5b1ed05cd709885a1144a051",
                        "5b1ed092d709885a1144a058",
                        "5b1ed107d709885a1144a05e",
                        "5b1ed57dd709885a1144a085",
                        "5b1ee110d709885a1144a0b1",
                        "5b1ee147d709885a1144a0bf",
                        "5b1ee1b0d709885a1144a0d7",
                        "5b1ee1f0d709885a1144a0e4",
                        "5b1ee2d4d709885a1144a0f1",
                        "5b1ee34fd709885a1144a107",
                        "5b1ee38cd709885a1144a112",
                        "5b1ee4f3d709885a1144a11e",
                        "5b1ee524d709885a1144a12a",
                        "5b1ee55fd709885a1144a136",
                        "5b1ee678d709885a1144a143",
                        "5b1ee6aed709885a1144a150",
                        "5b1ee7b7d709885a1144a15c",
                        "5b1edeeed709885a1144a09e",
                        "5b80747682caa4001475d666",
                        "5b80747e82caa4001475d66d",
                        "5c3e6108fb6fc0600be12bfe"
                    ],
                    "researchOwned": [],
                    "__v": 0
                },
                {
                    "_id": "5ac80309d110e411fa57085a",
                    "name": "Tom Swanson",
                    "nameShort": "tom-swanson",
                    "title": "Org Growth and Outreach",
                    "phone": "1234567890",
                    "email": "info@foundry10.org",
                    "bio": "Tom received his bachelor’s degree in Business Administration and Marketing from the University of Washington. He has worked on everything from small local clients to large-scale and multinational businesses. In his spare time, Tom works with independent and small game developers around Seattle to help them hone their business development and marketing practices. His involvement with foundry10 began in the very early stages of the company’s growth. While initially brought in to help with marketing, Tom quickly expanded into program design and development. His own love for learning and experiences in education drive him to seek innovation and growth for foundry10 and its students.",
                    "photo": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/tom.jpg",
                    "placeholderPhoto": "https://s3-us-west-2.amazonaws.com/f10-people/Re-edited+Team+Photos+230x300/Most+Recent/tom.jpg",
                    "fullBody": "https://s3-us-west-2.amazonaws.com/f10-people/Unfiltered+Full+Body+Team+Photos/TOM.png",
                    "programs": [
                        "5ae760762a6d8490f0e21138",
                        "5aebb9ff4b18e60de78272b3",
                        "5aebba234b18e60de78272b4",
                        "5aebba444b18e60de78272b5",
                        "5aebba5c4b18e60de78272b6",
                        "5aebba724b18e60de78272b7",
                        "5aebbc754b18e60de78272c1",
                        "5aebbc954b18e60de78272c2",
                        "5aebbcb24b18e60de78272c3",
                        "5aebbcce4b18e60de78272c4",
                        "5aebbd094b18e60de78272c5",
                        "5aebbd224b18e60de78272c6",
                        "5aebbd414b18e60de78272c7",
                        "5aebbd7e4b18e60de78272c8",
                        "5aebbdad4b18e60de78272c9",
                        "5aebbdc84b18e60de78272ca",
                        "5aebbdf94b18e60de78272cb",
                        "5aebbe1f4b18e60de78272cc",
                        "5aebbe474b18e60de78272cd",
                        "5af26bf7f278377d966edc48",
                        "5b15b1def5b1c90bca8fbdd5",
                        "5b19cc1f4c600f34a3971cbc",
                        "5b19cc3e4c600f34a3971cbd",
                        "5b19ccf34c600f34a3971cbf",
                        "5b19cd114c600f34a3971cc0",
                        "5b19cd494c600f34a3971cc1",
                        "5b19cd784c600f34a3971cc2",
                        "5b19cd9a4c600f34a3971cc3",
                        "5b19d12d4c600f34a3971cd6",
                        "5b19d1914c600f34a3971cd7",
                        "5b19d1f24c600f34a3971cd9",
                        "5b19d2134c600f34a3971cda",
                        "5b19d2464c600f34a3971cdb",
                        "5b19d2674c600f34a3971cdc",
                        "5b19d28d4c600f34a3971cdd",
                        "5b19d2b54c600f34a3971cde",
                        "5b19d2d14c600f34a3971cdf",
                        "5b19d2ef4c600f34a3971ce0",
                        "5b1edfa7d709885a1144a0a7",
                        "5b1ef306d709885a1144a169"
                    ],
                    "subjectAreas": [
                        "5ac8045182a9fb126c2c79e6",
                        "5ac8045182a9fb126c2c79e8",
                        "5ac806d610f6bb1328fb589d",
                        "5ac806d610f6bb1328fb58a0",
                        "5ac8074e10f6bb1328fb58a9"
                    ],
                    "research": [
                        "5b1ec8c8d709885a11449f9b",
                        "5b1ece77d709885a1144a01e",
                        "5b1ecec8d709885a1144a026",
                        "5b1ecf5cd709885a1144a033",
                        "5b1ed010d709885a1144a049",
                        "5b1ed05cd709885a1144a051",
                        "5b1ed107d709885a1144a05e",
                        "5b1ed441d709885a1144a072",
                        "5b1ed4f2d709885a1144a07b",
                        "5b1edeeed709885a1144a09e",
                        "5b1ee070d709885a1144a0a8",
                        "5b1ee185d709885a1144a0cb",
                        "5b1ee2d4d709885a1144a0f1",
                        "5b1ee524d709885a1144a12a",
                        "5b1ee55fd709885a1144a136",
                        "5b1ee678d709885a1144a143",
                        "5b1ee6aed709885a1144a150",
                        "5b1ee7b7d709885a1144a15c"
                    ],
                    "researchOwned": [],
                    "__v": 0
                }
            ]
        }
      ]
    };
  }

  componentDidMount() {
    axios.get('//')  //QUESTION 1: Fill out what should be in this axios.get string if the router we are calling to is research3 and the call is going to the example in EquityRouter.js file
      .then(research => {
        this.setState({
          equityResearch: research.data
        })
      }).catch(err => {
        console.log('err in /getEquityResearch: ', err);
      })
  }

  render() {
    if(this.state.equityResearch) {
      const equityResearchCards = this.state.equityResearch.map((records, index) => (
        <a href={'/research/'+records.nameShort} class="research-interestArea-link">
          {/* QUESTION 2: Please write the missing CSS for the <li> using flexbox in the file Challenge.css Only worry about the content in the <li>, so line 532 to 551*/}
          <li>
            <div class="challenge-card-container">
              <div class="challenge-card-content-container">
                <div class="challenge-card-image-container">
                  <img src={records.researchCardImageUrl} alt={records.name}/>
                </div>
                <div class="challenge-card-text-container">
                  <div class="challenge-card-mainText-equity">
                    <h2>{records.name}</h2>
                    <p>{records.brief}</p>
                  </div>
                  <div class="challenge-card-bottomText">
                    <h4>{records.researchType}</h4>
                    <h4>•</h4>
                    <div class="challenge-card-names">{records.allPeople.map((people, index) => <h4 key={index}>{people.name}</h4>)}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </a>
      ));
        return(
              <div id="research-interestArea-container">
                <div class="research-interestArea-content-container">
                  <div class="research-interestArea-title-equity">
                    <h2>Equity</h2>
                  </div>
                  <ul id="research-interestArea-cardsList2">
                    {equityResearchCards}
                  </ul>
                </div>
              </div>
        );
     } else {
      return (
        <p className='VisibilityOff'>

        </p>
      )
    }
  }
}
