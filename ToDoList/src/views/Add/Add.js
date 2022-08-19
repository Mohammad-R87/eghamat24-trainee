import {ref} from "@vue/reactivity";


export default {

    setup() {
        let Tasks = [];
        let Task = [];
        const title = ref(null);
        const date = ref(null);
        const filter = ref("all");


        function Add() {
            if (title.value.value !== "" && date.value.value !== "") {
                Task.push(date.value.value, title.value.value);
                Tasks.push({
                    id: Tasks.length,
                    text: Task,
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
            localStorage.setItem('missions', JSON.stringify(Tasks));
        }

        function toastError(){
            let elm = document.getElementById("error")
            elm.className = "show";
            setTimeout(function () {
                elm.className = elm.className.replace("show", "");
            }, 3000);
        }

        function toastSuccess(){
            let elm = document.getElementById("success")
            elm.className = "show";
            setTimeout(function () {
                elm.className = elm.className.replace("show", "");
            }, 3000);
        }

        return {
            Add,
            Tasks,
            Task,
            title,
            date,
        }
    }
}
