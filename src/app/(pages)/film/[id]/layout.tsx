import { Metadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
    params: {id: string};
}

// Из стейта брать фильм не получается, наверное в реальном проекте для этого есть ручки?
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    

    return {
        title: params.id
    }
}

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
