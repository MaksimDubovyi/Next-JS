export const getContacts = async () =>{
    const response = await fetch('http://localhost:3000/api/contacts',{
        next:{
            revalidate:250
        }
    });

    if(!response.ok)throw new Error("Unable to fetch contacts");

    return response.json();

}

export const getContactsBySearch = async (search) =>{
    const response = await fetch(`http://localhost:3000/api/contacts?search=${search}`,{
        next:{
            revalidate:250
        }
    });

    if(!response.ok)throw new Error("Unable to fetch contacts");

    return response.json();

}