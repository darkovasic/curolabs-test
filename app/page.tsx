import Image from "next/image";
import logo from "@/public/logo.png";
import { Separator } from "@/components/ui/separator";
import { SelectRange } from "@/components/SelectRange";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-[1368px] h-[211px] bg-primary p-6">
        <div className="flex items-center pb-6">
          <div className="flex shrink-0 w-10 h-10">
            <Image src={logo} alt="Curo Labs Logo" priority />
          </div>
          <div className="flex flex-col justify-center pl-3 gap-[2px]">
            <p className="text-[18px] leading-[27px] font-semibold">
              SecondaryAccount
            </p>
            <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
              Account ID: 127417370745
            </p>
          </div>
          <div className="flex justify-center h-8 px-8">
            <Separator orientation="vertical" className="bg-secondary" />
          </div>
          <div className="flex justify-between items-center w-full h-full">
            <div className="flex gap-6">
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Trading Days
                </p>
                <p className="text-[14px] leading-[21px] font-medium">5</p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Daily DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium">NaN</p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Max Daily DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -0.05%
                </p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Max DD
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -100%
                </p>
              </div>
              <div className="flex flex-col justify-center gap-[2px]">
                <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                  Profit Target
                </p>
                <p className="text-[14px] leading-[21px] font-medium text-negative">
                  -0.15%
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <SelectRange />
              <Button className="bg-pink">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.26662 4.96589H5.53328V1.23255C5.53328 1.0911 5.47709 0.955448 5.37707 0.855428C5.27706 0.755409 5.1414 0.699219 4.99995 0.699219C4.8585 0.699219 4.72285 0.755409 4.62283 0.855428C4.52281 0.955448 4.46662 1.0911 4.46662 1.23255V4.96589H0.733285C0.591836 4.96589 0.45618 5.02208 0.356161 5.1221C0.256141 5.22212 0.199951 5.35777 0.199951 5.49922C0.199951 5.64067 0.256141 5.77632 0.356161 5.87634C0.45618 5.97636 0.591836 6.03255 0.733285 6.03255H4.46662V9.76589C4.46662 9.90733 4.52281 10.043 4.62283 10.143C4.72285 10.243 4.8585 10.2992 4.99995 10.2992C5.1414 10.2992 5.27706 10.243 5.37707 10.143C5.47709 10.043 5.53328 9.90733 5.53328 9.76589V6.03255H9.26662C9.40807 6.03255 9.54372 5.97636 9.64374 5.87634C9.74376 5.77632 9.79995 5.64067 9.79995 5.49922C9.79995 5.35777 9.74376 5.22212 9.64374 5.1221C9.54372 5.02208 9.40807 4.96589 9.26662 4.96589Z"
                    fill="white"
                  />
                </svg>
                Import trades
              </Button>
              <Button className="bg-pink">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8889 5.9C10.5509 5.9 10.2778 6.1688 10.2778 6.5C10.2778 8.816 8.35828 10.7 6 10.7C4.87067 10.7 3.80183 10.256 3.01228 9.5H4.77778C5.11572 9.5 5.38889 9.2312 5.38889 8.9C5.38889 8.5688 5.11572 8.3 4.77778 8.3H1.87683C1.75583 8.2754 1.62933 8.2898 1.50894 8.342C1.49794 8.3462 1.48633 8.348 1.47533 8.3528C1.46739 8.357 1.45883 8.3564 1.45089 8.3606C1.43439 8.3702 1.42522 8.3858 1.40933 8.396C1.23394 8.5022 1.11111 8.6834 1.11111 8.9V11.9C1.11111 12.2312 1.38428 12.5 1.72222 12.5C2.06017 12.5 2.33333 12.2312 2.33333 11.9V10.508C3.32944 11.3846 4.62806 11.9 6 11.9C9.03294 11.9 11.5 9.4772 11.5 6.5C11.5 6.1688 11.2268 5.9 10.8889 5.9Z"
                    fill="white"
                  />
                  <path
                    d="M1.72222 6.5C1.72222 4.184 3.64172 2.3 6 2.3C7.12933 2.3 8.19817 2.744 8.98772 3.5H7.22222C6.88428 3.5 6.61111 3.7688 6.61111 4.1C6.61111 4.4312 6.88428 4.7 7.22222 4.7H10.1219C10.2436 4.7252 10.3713 4.7102 10.4917 4.6574C10.5027 4.6532 10.5143 4.6514 10.5253 4.6466C10.5332 4.6424 10.5418 4.643 10.5497 4.6388C10.5662 4.6292 10.5754 4.6136 10.5913 4.6034C10.7661 4.4978 10.8889 4.3166 10.8889 4.1V1.1C10.8889 0.7688 10.6157 0.5 10.2778 0.5C9.93983 0.5 9.66667 0.7688 9.66667 1.1V2.492C8.67056 1.6154 7.37194 1.1 6 1.1C2.96706 1.1 0.5 3.5228 0.5 6.5C0.5 6.8312 0.773167 7.1 1.11111 7.1C1.44906 7.1 1.72222 6.8312 1.72222 6.5Z"
                    fill="white"
                  />
                </svg>
                Update objectives
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}