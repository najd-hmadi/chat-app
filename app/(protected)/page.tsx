import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page =  async () => {
    const supabase = await createClient();
    const {data, error} = await supabase.auth.getUser();
    if(error || !data?.user){
        redirect("/login")
    }
    return (
    <div>page</div>
  )
}

export default page