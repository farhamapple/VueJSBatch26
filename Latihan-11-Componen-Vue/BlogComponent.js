export const BlogComponent ={
    template : `
        <div>
            <h3>{{ title }} <button @click="$emit('selected', title)">Pilih</button></h3>
            <p>{{ content }}</p>
        </div>
    `,
    data : function (){
        return {
            pesan : "Ini dari Component Blog"
        }
    },
    props : [ 'title', 'content']
}