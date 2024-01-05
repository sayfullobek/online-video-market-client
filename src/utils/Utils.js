export const LINK_CLIENT = "/auth/dashboard"
const roles = [
    "SUPER_ADMIN", "MANAGER", "ADMIN", "EDU_CENTER", "TEACHER", "STUDENT", "USER"
]
const role = localStorage.getItem("role")
export const SIDE_ARR =
 role===roles[0]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"Ishchilar bo'limi", logo:"", link:LINK_CLIENT},
        {name:"O'quv markazlar", logo:"", link:`${LINK_CLIENT}/edu-center`},
        {name:"O'qituvchilar", logo:"", link:`${LINK_CLIENT}/teacher`},
        {name:"O'quvchilar", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Foydalanuvchilar", logo:"", link:`${LINK_CLIENT}/users`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:role===roles[1]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"Ishchilar bo'limi", logo:"", link:LINK_CLIENT},
        {name:"O'quv markazlar", logo:"", link:`${LINK_CLIENT}/edu-center`},
        {name:"O'qituvchilar", logo:"", link:`${LINK_CLIENT}/teacher`},
        {name:"O'quvchilar", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Foydalanuvchilar", logo:"", link:`${LINK_CLIENT}/users`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:role===roles[2]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"O'quv markazlar", logo:"", link:`${LINK_CLIENT}/edu-center`},
        {name:"O'qituvchilar", logo:"", link:`${LINK_CLIENT}/teacher`},
        {name:"O'quvchilar", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Foydalanuvchilar", logo:"", link:`${LINK_CLIENT}/users`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:role===roles[3]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"O'qituvchilar", logo:"", link:`${LINK_CLIENT}/teacher`},
        {name:"O'quvchilar", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:role===roles[4]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"O'quvchilar", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:role===roles[5]?[
    {name:"Boshqaruv bo'limi", arr:
    [
        {name:"Video darslarim", logo:"", link:`${LINK_CLIENT}/students`},
        {name:"Statistika", logo:"", link:`${LINK_CLIENT}/statistics`},
    ]
    }
]:[]