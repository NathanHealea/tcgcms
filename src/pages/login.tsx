import { GoogleIcon } from '@/components/Icons';
import { NextPage } from '@/next.types';
import { useAuth } from '@/services/Authentication';
import { Field, Formik, Form, FormikHelpers } from 'formik';
import Link from 'next/link';

interface ISignUpPage {}

interface SignUpFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage: NextPage<ISignUpPage> = (props) => {
  const authService = useAuth();

  const handleOnSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: FormikHelpers<SignUpFormValues>
  ) => {
    setSubmitting(true);
    // TODO: validate values
    let error = await authService.loginWithEmailAndPassword(
      values.email,
      values.password
    );

    console.log(error);

    setSubmitting(false);
  };
  const handleLoginWithGoogle = async () => {
    let error = await authService.loginWithGoogle();
    console.log(error);
  };

  return (
    <main className='flex flex-1 justify-center items-center'>
      <div className=' w-full max-w-4xl p-8'>
        <div className='w-full card shadow-lg border border-base-300'>
          <div className='card-body gap-8'>
            <h1 className=' w-full text-center text-4xl'>Login to TCGCMS</h1>
            <Formik
              initialValues={{
                email: '',
                password: '',
                passwordConfirmation: '',
              }}
              onSubmit={handleOnSubmit}
            >
              <Form className='flex flex-col gap-4'>
                <div className='form-control w-full'>
                  <label className='label' htmlFor='email'>
                    <span className='label-text'>Email</span>
                  </label>
                  <Field
                    id='email'
                    name='email'
                    className='input input-bordered w-full'
                    type='email'
                  />
                </div>

                <div className='form-control w-full'>
                  <label className='label' htmlFor='password'>
                    <span className='label-text'>Password</span>
                  </label>
                  <Field
                    id='password'
                    name='password'
                    className='input input-bordered w-full'
                    type='password'
                  />
                </div>

                <div className='form-control w-full'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
            <div className='divider m-0'>OR</div>
            <div className='flex justify-center gap-4 flex-wrap'>
              <button
                onClick={handleLoginWithGoogle}
                type='button'
                className='btn btn-outline'
              >
                <GoogleIcon className='mr-4' />
                Login with Google
              </button>
            </div>
            <div className='divider m-0' />
            <div className='flex justify-center'>
              <span>
                Need an account?
                <Link href='/signup' className='link link-hover mx-1'>
                  Sign Up
                </Link>
              </span>
              <div className='flex-grow'></div>
              <Link href='/' className='link link-hover'>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
