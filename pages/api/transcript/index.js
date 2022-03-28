const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function handler(req, res) {

  if (req.method === 'POST') {

    if(!req.body.id || !req.body.data || !req.body.guild || !req.body.guild.name || !req.body.guild.id || !req.body.data.messages || !req.body.data.channelName) {
      return res.status(400).json("Une des valeurs est manquante:\n\nid,\ndata (JSON) {\nmessages: [{}],\nchannelName: ''\n}\nguild: (JSON) {\nname: ''\nid: ''\n}\nmessages")
    }

    if(req.body.id.length != 18) return res.status(400).json("Unknow channel discord id!")

    const post = await prisma.transcript.findUnique({
      where: { id: req.body.id },
    })
  
    if(!post) {
    
    await prisma.transcript.createMany({
       data: {
         id: req.body.id,
         data: req.body.data,
         guild: req.body.guild
     },
     })

     res.status(200).json("Created!")
    } else {
      res.status(400).json("ERROR: Channel id already exist !")
    }
} else {
console.log("pas good!")
 }
}