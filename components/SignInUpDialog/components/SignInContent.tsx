import {
  AllHTMLAttributes,
  ChangeEvent,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState
} from 'react';
import clsx from 'clsx';
import WuBlogLogoIcon from '/public/logo.svg';
import { SignInUpType } from '..';
import { signInReq } from '../../../utils/api/user';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AuthUserState } from '../../../store/reducers/authUser';
import { setUser } from '../../../store/actions/actions';
import { AxiosError } from 'axios';
import Router from 'next/router';

interface SignInInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const initialValues: SignInInputs = {
  email: '',
  password: '',
  rememberMe: false
};

interface SignInContentProps extends AllHTMLAttributes<HTMLDivElement> {
  setSignInUpType: (type: SignInUpType) => void;
  closeModal: () => void;
}

export default function SignInContent({
  className,
  setSignInUpType,
  closeModal
}: SignInContentProps) {
  // store
  const dispatch = useDispatch();

  // memo
  const validationSchema = useMemo(
    () =>
      Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(15, 'Must be 15 charactors or less.')
          .min(6, 'Must be 6 charactors or more.')
          .required('Required')
      }),
    []
  );

  // callback
  const handleSignIn = useCallback(
    async (values: SignInInputs, formikHelpers: FormikHelpers<SignInInputs>) => {
      const { email, password, rememberMe } = values;

      try {
        const res = await signInReq({ email, password, rememberMe });
        console.log('signin successes.', res.data.email);
        const user = res.data;

        localStorage.setItem('Auth', JSON.stringify(user));

        setUser(user).then((action) => {
          dispatch(action);
          closeModal();
        });

        Router.reload();
      } catch (err) {
        if (err instanceof AxiosError) {
          console.error('signup fails.', err.response?.data.msg);
          formikHelpers.setErrors({ password: err.response?.data.msg });
        } else {
          console.error('signup fails.', (err as Error).message);
          formikHelpers.setErrors({ password: (err as Error).message });
        }
      }
    },
    [closeModal, dispatch]
  );

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSignIn
  });

  const handleTurnToSignUp: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      e.preventDefault();
      setSignInUpType(SignInUpType.SignUp);
    },
    [setSignInUpType]
  );

  return (
    <div
      className={clsx(
        'flex min-h-full flex-col justify-center py-20 sm:px-8 lg:px-10 shadow',
        className
      )}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="h-12 w-12 relative mx-auto">
          <WuBlogLogoIcon />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {"Don't have an account? Just"}{' '}
          <a
            onClick={handleTurnToSignUp}
            href="#"
            className="font-medium text-primary hover:text-blue-600">
            sign up
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={clsx(
                    'block w-full rounded-md border-0 py-1.5 text-gray-700 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 outline-none',
                    formik.touched.email && formik.errors.email
                      ? 'ring-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500'
                      : 'focus:ring-2 focus:ring-inset focus:ring-primary'
                  )}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="mt-2 font-medium text-xs text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={clsx(
                    'block w-full rounded-md border-0 py-1.5 text-gray-700 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 outline-none',
                    formik.touched.password && formik.errors.password
                      ? 'ring-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500'
                      : 'focus:ring-2 focus:ring-inset focus:ring-primary'
                  )}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="mt-2 font-medium text-xs text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary shadow outline-none"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-blue-600">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-white shadow hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
