var express = require('express'); 

const { readdirSync, statSync } = require('fs')
const path = require('path')
const { join } = require('path')

const PORT = process.env.PORT || 5000;

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const tangle_dir_path= __dirname + "/public/Capped-Trivial-Tangles"
const files = p => readdirSync(p).filter(f => statSync(join(p, f)).isFile())

// const d = dirs(tangle_dir_path)

// var f = []
// d.forEach((tangle) => {
//     const path = __dirname + "/public/Capped-Trivial-Tangles/" + tangle + "/"
//     f.push([tangle, files(path)])
// }) 
// const sorted_f = f.sort((a, b) => {
//     var a_number = parseInt(a[0].split('_')[0]);
//     var b_number = parseInt(b[0].split('_')[0]);
//     console.log(a_number);
//     console.log(b_number);
//     console.log(a_number > b_number);
//     return a_number == b_number ? 0 : (a_number > b_number ? 1 : -1);
// })
// console.log(sorted_f)



const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


app.get('/hi', (req, res) => {
    const d = dirs(tangle_dir_path)
    var f = []
    d.forEach((tangle) => {
        const path = __dirname + "/public/Capped-Trivial-Tangles/" + tangle + "/"
        f.push([tangle, files(path)])
    }) 
    const sorted_f = f.sort((a, b) => {
        var a_number = parseInt(a[0].split('_')[0]);
        var b_number = parseInt(b[0].split('_')[0]);
        console.log(a_number);
        console.log(b_number);
        console.log(a_number > b_number);
        return a_number == b_number ? 0 : (a_number > b_number ? 1 : -1);
    })
    console.log(sorted_f)
    res.json(sorted_f)
}
)
