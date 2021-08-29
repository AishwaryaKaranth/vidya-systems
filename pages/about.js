import React from 'react';
import style from '../styles/About.module.css'

const AboutData=[
    {
        id:1,
        heading:'Trust',
        description:'We are playing a vital role in the field of education, having 20 plus years of experiene, Providing with 100%  satisfaction  to our learners, Convenient mode of teaching and learning methods'
    },
    {
        id:2,
        heading:'Expert Trainers',
        description:'Expert and Dedicated Faculties, Highly professional and skilled management, Over 10-15 years’ experienced Corporate Trainers'
    },
    {
        id:3,
        heading:'Best Training Methods',
        description:'Trending Industry oriented IT and Management Programs, Quality based training methods,Lab facility and workshops given for Practical exposure, Practical’s based  classroom training in emerging technologies like Machine Learning, Data Science and Analytics, Online and Offline mode of teaching'
    },
    {
        id:4,
        heading:'Flexible Batch Timings',
        description:'Choose own training schedules, Weekdays and Weekends Batches'
    },
    {
        id:5,
        heading:'Job Assistance',
        description:'Placement training provided, Ensures better job satisfaction and development, Guidance for interview Preparation & Questions'
    },
    {
        id:6,
        heading:'Reasonable Price ',
        description:'Affordable Course fees, EMI options given to the students'
    },
    {
        id:7,
        heading:'Get Certified',
        description:'Quality Certifications, Standard Setting, Evaluation of Assessments'
    },
    {
        id:8,
        heading:'Accessibility',
        description:'Easily available 24* 7* 365, Can be visited any time'
    }
]
const about=()=>{
    return(
        <div className={style['container']}>
            <h1 className={style['main-heading']}>About</h1>
            <h2 className={style['subheading']}>Why Vidya Systems</h2>
            <div className={style['flex-grid-container']}>
                {AboutData.map((data)=>
                    <div className={style['flex-grid']}>
                        <h3 className={style['col']} key={data.id}>{data.heading}</h3>
                        <p className={style['topic-description']} key={data.id}>{data.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default about;