export interface UsernameFormProps {
    fullName: string;
    setFullName: (val: string) => void;
    usernamePhone: string;
    setUsernamePhone: (val: string) => void;
    usernameEmail: string;
    setUsernameEmail: (val: string) => void;
    keyword: string;
    setKeyword: (val: string) => void;
}

export interface NameOnlyFormProps {
    fullName: string;
    setFullName: (val: string) => void;
}

export interface UsernameOnlyFormProps {
    keyword: string;
    setKeyword: (val: string) => void;
}

export interface CustomFormProps {
    formType: number;
    controller: string;
    setController: (val: string) => void;
}
