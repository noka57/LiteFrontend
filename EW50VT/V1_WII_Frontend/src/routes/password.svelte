<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker,Spinner } from 'flowbite-svelte';
  import TimezonePicker from 'svelte-timezone-picker';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";



  let admin_password="";
  let confirm_admin_password="";
  let ApasswordContent="";
  let ApasswordBinary="";
  let AdminPasswordShown=false;
  let CheckAdminPasswordAlready=0
  let ValidAdminPassword=0;
  let AdminPWMismatch=0;
  let AdminPWRuleFailed=0;
  let currentTime ="";
  let NewPassword="";


  let guest_password="";
  let confirm_guest_password="";  
  let GpasswordContent="";
  let GpasswordBinary="";
  let GuestPasswordShown=false;
  let CheckGuestPasswordAlready=0
  let ValidGuestPassword=0;
  let GuestPWMismatch=0;
  let GuestPWRuleFailed=0;


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
        sessionid = val;
  });

  function CheckPasswordRule(str) {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    return lowerCaseRegex.test(str) && upperCaseRegex.test(str) && numberRegex.test(str) && str.length >=8;
  }


  async function PostadminCheckpassword () {
    const res = await fetch(window.location.origin+"/adMinCheckPW",  {
        method: 'POST',
        body: ApasswordContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {
            admin_password="";
            confirm_admin_password=""

            CheckAdminPasswordAlready=1;
            AdminPasswordShown=false;
            ValidAdminPassword=1;

            console.log("admin check pw OK\r\n");
        }
        else
        {
            CheckAdminPasswordAlready=1;
            ValidAdminPassword=0;
            console.log("check admin error:",res.status);
        }
  }



  function CheckAdminPassword()
  {
      const bytesArray = Array.from(admin_password).map(char => char.charCodeAt(0));
      ApasswordBinary = new Uint8Array(bytesArray);
      ApasswordContent=new Uint8Array(ApasswordBinary.length+sessionBinary.length);
      ApasswordContent.set(sessionBinary,0);
      ApasswordContent.set(ApasswordBinary, sessionBinary.length);
      CheckAdminPasswordAlready=0;
      PostadminCheckpassword();

  }


  async function doPostChangeAPW() {
    console.log("ChangeAPW");
    const res = await fetch(window.location.origin+"/PchangeAdminPW", {
      method: 'POST',
      body: JSON.stringify({
        sessionid,
        NewPassword,
        currentTime: parseInt(currentTime)
      })
    })

    if (res.status == 200)
    {
      console.log("change a password OK");
      alert("Successful change! Please login again.");
      window.location = '/';

    }
    else
    {
      console.log("errorA");
    }
  };


  async function doPostChangeGPW() {
    console.log("ChangeGPW");
    const res = await fetch(window.location.origin+"/PchangeGuestPW", {
      method: 'POST',
      body: JSON.stringify({
        sessionid,
        NewPassword,
        currentTime: parseInt(currentTime)
      })
    })

    if (res.status == 200)
    {
      console.log("change g password OK");
      alert("Successful change!");
    }
    else
    {
      console.log("errorG");
    }
  };


  function ChangeGuestPassword()
  {
    if (guest_password != confirm_guest_password)
    {
      GuestPWMismatch=1;
    }

    else
    {
      GuestPWMismatch=0;
      if (CheckPasswordRule(guest_password))
      {
        GuestPWRuleFailed=0;
        console.log("OK, start change guest password");
        currentTime= Math.floor((new Date().getTime())/1000);
        console.log(currentTime);
        NewPassword=guest_password;
        doPostChangeGPW();

      
      }
      else
      {
        GuestPWRuleFailed=1;

      }
    }

  }

  function ChangeAdminPassword()
  {

    if (admin_password != confirm_admin_password)
    {
      AdminPWMismatch=1;
    }

    else
    {
      AdminPWMismatch=0;
      if (CheckPasswordRule(admin_password))
      {
        AdminPWRuleFailed=0;
        console.log("OK, start change admin password");
        currentTime= Math.floor((new Date().getTime())/1000);
        console.log(currentTime);
        NewPassword=admin_password;
        doPostChangeAPW();
      
      }
      else
      {
        AdminPWRuleFailed=1;

      }
    }

  }


  async function PostguestCheckpassword () {
    const res = await fetch(window.location.origin+"/GuEstchEckpw",  {
        method: 'POST',
        body: GpasswordContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {
            guest_password="";
            confirm_guest_password=""

            CheckGuestPasswordAlready=1;
            GuestPasswordShown=false;
            ValidGuestPassword=1;
            console.log("guest check pw OK\r\n");
        }
        else
        {
            CheckGuestPasswordAlready=1;
            ValidGuestPassword=0;
            console.log("check guest error:",res.status);
        }
  }



  function CheckGuestPassword()
  {
      const bytesArray = Array.from(guest_password).map(char => char.charCodeAt(0));
      GpasswordBinary = new Uint8Array(bytesArray);
      GpasswordContent=new Uint8Array(GpasswordBinary.length+sessionBinary.length);
      GpasswordContent.set(sessionBinary,0);
      GpasswordContent.set(GpasswordBinary, sessionBinary.length);
      CheckGuestPasswordAlready=0;
      PostguestCheckpassword();
  }


  onMount(() => {

    console.log("password sessionid: ");
    console.log(sessionid);



    const hexArray = sessionid.match(/.{1,2}/g); 
    const byteValues = hexArray.map(hex => parseInt(hex, 16));
    sessionBinary = new Uint8Array(byteValues);

    admin_password="";
    confirm_admin_password="";
    AdminPasswordShown=false;
    CheckAdminPasswordAlready=0
    ValidAdminPassword=0;


    guest_password="";
    confirm_guest_password="";
    GuestPasswordShown=false;
    CheckGuestPasswordAlready=0
    ValidGuestPassword=0;


  });


 </script>

 <Tabs style="underline">
  <TabItem open title="admin">
  
<table>

{#if ValidAdminPassword==0 }

<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">Please enter current password before change it.</caption>



<tr><td class="w-80"></td>
      <td class="pl-5 pt-5">

{#if AdminPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={admin_password} required placeholder="Current Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={admin_password} required placeholder="Current Password">
{/if}



      </td>
<td class="pl-5 pt-5">    <Button on:click={CheckAdminPassword}>Continue</Button></td>



<td class="pl-5 pt-5" colspan="2">
{#if CheckAdminPasswordAlready == 1 && ValidAdminPassword==0}
<p style="color:red; font-size:18px">It's invalid password.</p>
{/if}
</td>
    



</tr>


<tr><td class="w-80"></td>
  <div class="pl-5 pt-5">
    <label>
      <input type="checkbox" bind:checked={AdminPasswordShown}/>
      Show Password
    </label>
  </div>
</tr>

{:else if CheckAdminPasswordAlready==1 && ValidAdminPassword==1}




<tr><td class="w-80"></td>      <td class="pl-5 pt-5">

{#if AdminPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={admin_password} required placeholder="New Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={admin_password} required placeholder="New Password">
{/if}


      </td>


</tr>


<tr><td class="w-80"></td>      <td class="pl-5 pt-5">

{#if AdminPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={confirm_admin_password} required placeholder="Confirm Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={confirm_admin_password} required placeholder="Confirm Password">
{/if}


      </td>


</tr>


<tr><td class="w-80"></td>
  <div class="pl-5 pt-5">
    <label>
      <input type="checkbox" bind:checked={AdminPasswordShown}/>
      Show Password
    </label>
  </div>
</tr>

<tr><td class="w-80"></td><td class="w-60"></td><td class="pl-5 pt-5">

 <Button on:click={ChangeAdminPassword}>Change</Button></td>

</tr>

{#if AdminPWMismatch}
<tr><td class="w-80"></td>
<td class="pt-5" colspan="2">
<p style="color:red; font-size:18px">Mismatch. Please enter password again.</p>
</td>
</tr>
{:else if AdminPWRuleFailed==1}
<tr><td class="w-80"></td>
<td class="pt-5" colspan="2">
<p style="color:red; font-size:18px">Password must contain at least one lowercase letter, one uppercase letter,</p>
<p style="color:red; font-size:18px">one number and has a minimum length of 8 characters.</p>
<p style="color:red; font-size:18px">Please enter password again.</p>
</td>
</tr>

{/if}


{/if}


</table>

  </TabItem>
  <TabItem title="guest">


<table>

{#if ValidGuestPassword==0 }

<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">Please enter current password before change it.</caption>



<tr><td class="w-80"></td>
      <td class="pl-5 pt-5">

{#if GuestPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={guest_password} required placeholder="Current Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={guest_password} required placeholder="Current Password">
{/if}



      </td>
<td class="pl-5 pt-5">    <Button on:click={CheckGuestPassword}>Continue</Button></td>



<td class="pl-5 pt-5" colspan="2">
{#if CheckGuestPasswordAlready == 1 && ValidGuestPassword==0}
<p style="color:red; font-size:18px">It's invalid password.</p>
{/if}
</td>
    



</tr>


<tr><td class="w-80"></td>
  <div class="pl-5 pt-5">
    <label>
      <input type="checkbox" bind:checked={GuestPasswordShown}/>
      Show Password
    </label>
  </div>
</tr>

{:else if CheckGuestPasswordAlready==1 && ValidGuestPassword==1}




<tr><td class="w-80"></td>      <td class="pl-5 pt-5">

{#if GuestPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={guest_password} required placeholder="New Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={guest_password} required placeholder="New Password">
{/if}


      </td>


</tr>


<tr><td class="w-80"></td>      <td class="pl-5 pt-5">

{#if GuestPasswordShown}      
      <input type="text"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={confirm_guest_password} required placeholder="Confirm Password">
{:else}
      <input type="password"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={confirm_guest_password} required placeholder="Confirm Password">
{/if}


      </td>


</tr>


<tr><td class="w-80"></td>
  <div class="pl-5 pt-5">
    <label>
      <input type="checkbox" bind:checked={GuestPasswordShown}/>
      Show Password
    </label>
  </div>
</tr>

<tr><td class="w-80"></td><td class="w-60"></td><td class="pl-5 pt-5">

 <Button on:click={ChangeGuestPassword}>Change</Button></td>

</tr>



{#if GuestPWMismatch}
<tr><td class="w-80"></td>
<td class="pt-5" colspan="2">
<p style="color:red; font-size:18px">Mismatch. Please enter password again.</p>
</td>
</tr>
{:else if GuestPWRuleFailed==1}
<tr><td class="w-80"></td>
<td class="pt-5" colspan="2">
<p style="color:red; font-size:18px">Password must contain at least one lowercase letter, one uppercase letter,</p>
<p style="color:red; font-size:18px">one number and has a minimum length of 8 characters.</p>
<p style="color:red; font-size:18px">Please enter password again.</p>
</td>
</tr>

{/if}




{/if}

</table>



  </TabItem>

  </Tabs>