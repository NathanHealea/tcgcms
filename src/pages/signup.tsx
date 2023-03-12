import { NextPage } from '@/next.types';
import { useAuthService } from '@/services/Authentication';
import { Field, Formik, Form, FormikHelpers } from 'formik';
import Link from 'next/link';

interface ISignUpPage {}

interface SignUpFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage: NextPage<ISignUpPage> = (props) => {
  const authService = useAuthService();

  const handleOnSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: FormikHelpers<SignUpFormValues>
  ) => {
    try {
      setSubmitting(true);
      // TODO: validate values
      let credentials = await authService.signUp(values.email, values.password);
      console.log(credentials);
    } catch (error: any) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className='flex flex-1 justify-center items-center'>
      <div className=' w-full max-w-7xl p-8'>
        <div className='w-full card shadow-lg border border-base-300'>
          <div className='card-body gap-8'>
            <h1 className=' w-full text-4xl'>
              Start managing you collection today!
            </h1>
            <h3>Create an account with TCGCMS</h3>
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
                  <label className='label' htmlFor='passwordConfirmation'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <Field
                    id='passwordConfirmation'
                    name='passwordConfirmation'
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
              <div className='btn btn-outline btn-circle'></div>
              <div className='btn btn-outline btn-circle'></div>
              <div className='btn btn-outline btn-circle'></div>
              <div className='btn btn-outline btn-circle'></div>
            </div>
            <div className='divider m-0' />
            <div className='flex justify-center'>
              <span>
                Already have an account?
                <Link href='/login' className='link link-hover mx-1'>
                  Login
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
