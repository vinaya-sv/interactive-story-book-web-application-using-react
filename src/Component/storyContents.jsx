import characters from "./characters";

const stories=[
    {title:"Adventures of Kiara", author:"Vinaya", image:"https://png.pngtree.com/png-clipart/20210906/ourlarge/pngtree-childrens-picture-book-landscape-png-image_3865212.jpg",story:[
        //0
        {type:"non-interactive", passage:"Once upon a time...", character:"narrator", nextPage:1, background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //1
        {type:"non-interactive", passage:"There lived a beautiful girl named Kiara", character:"narrator", nextPage:2, background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693733707/Untitled_vpnmpm.png"},
        //2
        {type:"non-interactive", passage:"Once she went to market with her mother", character:"narrator", nextPage:3, background:"https://i.pinimg.com/564x/fb/62/4d/fb624dcaefc878f56fedd95efa0619df.jpg"},
        //3
        {type:"non-interactive", passage:"Unfortunately, she lost herself in the crowd", character:"narrator", nextPage:4,  background:"https://i.pinimg.com/564x/3a/25/10/3a2510bfa9512d8dbfe2fa81cb95cbbd.jpg"},
        //4
        {type:"non-interactive", passage:"Poor Kiara! She keeps crying", character:"narrator", nextPage:5,  background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693734147/Untitled_o2m6dt.png"},
        //5
        {type:"non-interactive", passage:"That is when she meets you", character:"narrator", nextPage:6,  background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //6
        {type:"non-interactive", passage:"Can you help me reach my home?", character:"Kiara", nextPage:7,  background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //7
        {type:"non-interactive", passage:"Yeah sure! How far is your home?", character:"You", nextPage:8, background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //8
        {type:"non-interactive", passage:"It is 5km away from this market", character:"Kiara",nextPage:9,  background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //9
        {type:"interactive", passage:"Hmm...How can we take Kiara to her home?", options:[
            {option:"Bus",nextPage:10, image:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693563991/bus-cartoon-icon-illustration_138676-1957_kv77vw.jpg"},
            {option:"Train",nextPage:11, image:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693564059/depositphotos_112852178-stock-illustration-toy-train-vector-illustration_tbijxn.jpg"},
            {option:"Cycle", nextPage:12, image:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693564089/woman-riding-bike-healthy-lifestyle-sport-outdoor-activity-concept-illustration-free-vector_s5ahdx.jpg"}],
            character:"You", background:"https://res.cloudinary.com/dl3stdqmp/image/upload/v1693582405/1739ad9fcd12a720a680883d5ec304ca_u8bcve.jpg"},
        //10
        {type:"non-interactive", passage:"Great! Let us go by Bus", character:"You", nextPage:1},
        //11
        {type:"non-interactive", passage:"Great! Let us go by Train", character:"You", nextPage:1},
        //12
        {type:"non-interactive", passage:"Great! Let us go by Cycle", character:"You", nextPage:1},
    ],characters:{"Kiara":characters.girl1, "You":characters.boy2}},
    {title:"Humpty Dumpty", author:"Millie", image:"https://i.pinimg.com/1200x/48/68/ab/4868ab4ad522e7af7f197764cdb2d381.jpg"},
    {title:"Jack & the Beanstalk", author:"Robert", image:"https://assets.sooperbooks.com/story-pics/bb4dbdad-4088-4f30-882a-8fbb4b8e8be9_Jack-And-The-Beanstalk-Landscape-Cover-1280x720.1280x720.jpg"},
];
export default stories;