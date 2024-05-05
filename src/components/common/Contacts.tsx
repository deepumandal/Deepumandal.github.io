import React from "react";

const Contacts:React.FC = () => {
  const contacts = [
    {
      title: "Phone Number",
      value: "+91 7827119146",
      icon: "phone.svg",
    },
    {
      title: "Email",
      value: "dev.workwithdeepak@gmail.com",
      icon: "email.png",
    },
    {
      title: "Location",
      value: "Delhi, India",
      icon: "location.png",
    },
    {
      title: "Birthday",
      value: "May 23, 2003",
      icon: "birthday.png",
    },
  ];
  return (
    <div className="bg-secondary-l dark:bg-secondary-d  w-[90%] shadow-sm px-4 py-2 rounded-2xl border border-slate-300 flex flex-col justify-around">
      {contacts.map((contact, index) => {
        return (
          <div>
            <div className="flex items-center p-2 tabView:p-2 m-1 tabView:m-0 gap-2 text-[#3D4044]">
              <img
                src={contact.icon}
                alt={contact.title}
                className="w-[24px] aspect-square rounded-full"
                title={contact.title}
              />
              <div>
                <p className="text-[12px] text-heading-l dark:text-heading-d">{contact.title}</p>
                <p className="text-[11px] text-text-l dark:text-text-d">{contact.value}</p>
              </div>
            </div>
            {index !== contacts.length - 1 && (
              <div className="border-b border-gray-400"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
