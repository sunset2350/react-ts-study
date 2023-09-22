import useSWR from "swr";

interface ContactData {
  id: number;
  name: string;
  phone: string;
}

export const useContactData = () => {
  const { data: ContactsData, mutate: mutateContactData } = useSWR<
    ContactData[]
  >("@data/contacts", {
    fallbackData: [],
  });
  return { ContactsData, mutateContactData };
};

export default useContactData;
