<template>
    <div class="mt-5">
        <div class="col-sm-12 col-md-6 m-auto">
            <div class="card card-primary">
                <div class="card-header">
                    <h4>Add New Task</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input
                                    v-model="formData.title"
                                    type="text"
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="due-date">Due Date</label>
                                <input
                                    v-model="formData.due_date"
                                    type="text"
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12">
                            <div class="form-group">
                                <label for="">Description</label>
                                <textarea
                                    v-model="formData.description"
                                    class="form-control"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button @click="Add" value="Add" class="btn btn-primary btn-lg btn-block">ADD</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from "@vue/reactivity";


export default {

    data() {
        return {
            formData: {
                title: undefined,
                due_date: undefined,
                description: undefined
            }
        }
    },

    computed: {
        initParams() {
            return (localStorage.getItem('missions')) ? JSON.parse((localStorage.getItem('missions'))) : [];
        }
    },

    methods: {
        submit() {

        },

        updateLocalStorage() {

        }
    },

    setup() {
        let data = (localStorage.getItem('missions')) ? JSON.parse(localStorage.getItem('missions')) : {
            Tasks: [],
        }
        let Task = [];
        const title = ref(null);
        const date = ref(null);

        function Add() {
            if (title.value.value !== "" && date.value.value !== "") {
                Task.push(date.value.value, title.value.value);
                console.log(Task);
                data.Tasks.push({
                    id: data.Tasks.length,
                    title: title.value.value,
                    date: date.value.value,
                    condition: true,
                    show: true
                })
                dataObjectUpdated();
                Task = [];
                title.value.value = "";
                date.value.value = "";
                toastSuccess();
            } else {
                toastError();
                console.log("error");
            }
        }

        function dataObjectUpdated() {
            localStorage.setItem('missions', JSON.stringify(data));
        }

        function toastError() {
            let elm = document.getElementById("error")
            elm.className = "show";
            setTimeout(function () {
                elm.className = elm.className.replace("show", "");
            }, 3000);
        }

        function toastSuccess() {
            let elm = document.getElementById("success")
            elm.className = "show";
            setTimeout(function () {
                elm.className = elm.className.replace("show", "");
            }, 3000);
        }

        return {
            Add,
            data,
            Task,
            title,
            date,
        }
    }
}

</script>