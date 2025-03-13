import { NextApiRequest, NextApiResponse } from 'next';
var db = {"id":{}}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        const { id } = req.query;
        return res.status(200).json(db.id || {});
    } 
    
    try {
        const response = await fetch("https://tool.icool-test.xin/api/graphy/submit", {
            method: req.method,
            body: req.body
        })
        const data = await response.json()
        if (data.code == 200) {
            const id = Math.random().toString(36).substring(7);
            db.id = data.data;
            return res.status(200).json({"code":200, "data": {"id":id}});
    
        } else {
            return res.status(200).json({ code:500, message: '提交失败' });
        } 
    } catch (error) {
        
    }

    
}
