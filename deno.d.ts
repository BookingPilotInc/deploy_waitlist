declare module "deno" {
  export interface Env {
    get(key: string): string | undefined;
  }
  
  export const env: Env;
}

declare module "https://deno.land/std@0.190.0/http/server.ts" {
  export function serve(handler: (req: Request) => Promise<Response>): void;
}

declare module "npm:resend@2.0.0" {
  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send(options: any): Promise<any>;
    };
  }
}
