<template>
<div class="pa-5">
<v-row>
<v-btn
    color="primary lighten-2"
    @click="dialogs.edit = true"
    class="mr-4"
>
Edit
</v-btn>
<v-btn
    color="red lighten-2"
    @click="dialogs.delete = true"
>
Delete
</v-btn>
</v-row>
<dialog-edit
    v-if="dialogs.edit"
    :city="city"
    @close="dialogs.edit = false"
    />
<dialog-delete
    v-if="dialogs.delete"
    :city="city"
    @close="dialogs.delete = false"
    />
</div>

</template>

<script>
export default { 
    props:['city'],
    data: () => ({
        items: [
            {   
                title: 'Edit',
                icon:'mdi-pencil',
                click(){
                    this.dialogs.edit = true
                }
            },
            {   
                title: 'Delete',
                icon:'mdi-delete',
                click(){
                    this.dialogs.delete = true
                }
            }
        ],
        dialogs:{
            edit:false,
            delete:false,
            dueDate:false
        }
    }),
    methods:{
        handleClick(index){
            this.items[index].click.call(this)
        }
    },
    components:{
        'dialog-edit':require('@/components/City/Dialogs/DialogEdit.vue').default,
        'dialog-delete':require('@/components/City/Dialogs/DialogDelete.vue').default
    }
}
</script>
