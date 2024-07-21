import Image from "next/image";
import logo from "@/public/logo.png";
import { Separator } from "@/components/ui/separator";
import { SelectRange } from "@/components/SelectRange";
import { Button } from "@/components/ui/button";
import { AccountSummary } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

function Header({ metrics }: { metrics: AccountSummary }) {
  return (
    <div className="flex flex-col w-[1368px] bg-primary p-6">
      <div className="flex items-center pb-4">
        <div className="flex shrink-0 w-10 h-10">
          <Image src={logo} alt="Curo Labs Logo" priority />
        </div>
        <div className="flex flex-col justify-center pl-3 gap-[2px]">
          <p className="text-[18px] leading-[27px] font-semibold">
            SecondaryAccount
          </p>
          <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
            Account ID: {metrics.account_id}
          </p>
        </div>
        <div className="flex justify-center px-8">
          <Separator orientation="vertical" className="bg-secondary h-[32px]" />
        </div>
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex gap-6">
            <div className="flex flex-col justify-center gap-[2px]">
              <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                Trading Days
              </p>
              <p className="text-[14px] leading-[21px] font-medium">
                {metrics.trading_days}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
              <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                Daily DD
              </p>
              <p
                className={`text-[14px] leading-[21px] font-medium ${
                  metrics.daily_dd < 0 ? "text-negative" : "text-positive"
                }`}
              >
                {metrics.daily_dd}%
              </p>
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
              <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                Max Daily DD
              </p>
              <p
                className={`text-[14px] leading-[21px] font-medium ${
                  metrics.max_daily_dd < 0 ? "text-negative" : "text-positive"
                }`}
              >
                {metrics.max_daily_dd}%
              </p>
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
              <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                Max DD
              </p>
              <p
                className={`text-[14px] leading-[21px] font-medium ${
                  metrics.max_dd < 0 ? "text-negative" : "text-positive"
                }`}
              >
                {metrics.max_dd}%
              </p>
            </div>
            <div className="flex flex-col justify-center gap-[2px]">
              <p className="text-[12px] leading-[18px] font-normal text-secondary-foreground">
                Profit Target
              </p>
              <p
                className={`text-[14px] leading-[21px] font-medium ${
                  metrics.profit_target < 0 ? "text-negative" : "text-positive"
                }`}
              >
                {metrics.profit_target}%
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
      <div className="flex justify-between w-full h-[100px]">
        <div className="flex w-[251px] h-full rounded-lg p-6 gap-3 bg-card">
          <div className="flex justify-center items-center w-6 h-6 bg-card-icon rounded-md">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.22997 5.23921C3.60922 5.11406 3.06384 4.77746 2.70464 4.2978C2.64699 4.22186 2.60682 4.13599 2.58657 4.04541C2.56633 3.95483 2.56643 3.86144 2.58686 3.77089C2.76417 3.18544 3.76527 2.85934 4.73372 3.07479C5.18539 3.16587 5.59481 3.38339 5.90508 3.69713C5.98657 3.78571 6.0864 3.85868 6.19883 3.91184C6.31126 3.96501 6.43407 3.99732 6.5602 4.00691C6.68633 4.0165 6.8133 4.00319 6.93378 3.96775C7.05427 3.9323 7.1659 3.87541 7.26227 3.80035C7.35863 3.7253 7.43781 3.63356 7.49527 3.53041C7.55273 3.42726 7.58732 3.31474 7.59706 3.19932C7.60679 3.0839 7.59149 2.96786 7.55201 2.85787C7.51254 2.74788 7.44968 2.64611 7.36704 2.55842C6.79509 1.9639 6.03412 1.54793 5.19074 1.36879C5.13954 1.35708 5.08961 1.35591 5.0384 1.34654V0.878177C5.0384 0.64527 4.93725 0.421902 4.75719 0.257212C4.57713 0.0925219 4.33291 0 4.07827 0C3.82363 0 3.57941 0.0925219 3.39935 0.257212C3.21929 0.421902 3.11814 0.64527 3.11814 0.878177V1.36059C2.56645 1.4577 2.05378 1.68954 1.63446 2.03153C1.21514 2.37351 0.904813 2.8129 0.736369 3.30312C0.64692 3.62009 0.628481 3.95034 0.68216 4.27401C0.73584 4.59767 0.86053 4.90806 1.04873 5.18651C1.66806 6.0784 2.64815 6.70983 3.77487 6.94287C4.39587 7.0682 4.94132 7.40526 5.3002 7.88545C5.35793 7.96136 5.39819 8.04721 5.41854 8.13778C5.4389 8.22836 5.43892 8.32177 5.41861 8.41235C5.24003 8.9978 4.23829 9.32273 3.27112 9.10845C2.81485 9.01739 2.40186 8.79645 2.09144 8.47734C1.92729 8.3008 1.6935 8.19077 1.44103 8.17122C1.18856 8.15167 0.937873 8.22419 0.743615 8.37298C0.549356 8.52176 0.427272 8.73475 0.403973 8.96551C0.380674 9.19628 0.458049 9.42611 0.619232 9.60492C1.19342 10.211 1.96302 10.6349 2.8173 10.8156C2.91715 10.8379 3.01636 10.849 3.11622 10.8654V11.1218C3.11622 11.3547 3.21737 11.5781 3.39743 11.7428C3.57749 11.9075 3.82171 12 4.07635 12C4.33099 12 4.57521 11.9075 4.75527 11.7428C4.93533 11.5781 5.03648 11.3547 5.03648 11.1218V10.7969C5.55851 10.6826 6.03898 10.4459 6.43058 10.1101C6.82218 9.77429 7.11139 9.351 7.26975 8.88188C7.35899 8.56486 7.37727 8.2346 7.32348 7.91096C7.2697 7.58731 7.14495 7.27694 6.95675 6.99849C6.33768 6.10555 5.35735 5.47305 4.22997 5.23921Z"
                fill="#E74694"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
              Balance
            </p>
            <p className="text-[18px] leading-[27px] font-semibold">
              {formatCurrency(metrics.balance)}{" "}
              <span className="text-[14px] leading-[21px] font-normal text-negative">
                (9.85%)
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-[251px] h-full rounded-lg p-6 gap-3 bg-card">
          <div className="flex justify-center items-center w-6 h-6 bg-card-icon rounded-md">
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6201 10H1.14724C0.896004 10 0.655057 9.90123 0.477406 9.72541C0.299755 9.5496 0.199951 9.31114 0.199951 9.0625V0.9375C0.199951 0.688859 0.299755 0.450403 0.477406 0.274587C0.655057 0.0987719 0.896004 0 1.14724 0C1.39848 0 1.63942 0.0987719 1.81708 0.274587C1.99473 0.450403 2.09453 0.688859 2.09453 0.9375V8.125H10.6201C10.8714 8.125 11.1123 8.22377 11.29 8.39959C11.4676 8.5754 11.5674 8.81386 11.5674 9.0625C11.5674 9.31114 11.4676 9.5496 11.29 9.72541C11.1123 9.90123 10.8714 10 10.6201 10Z"
                fill="#E74694"
              />
              <path
                d="M3.67335 7.5C3.49742 7.5 3.32498 7.45152 3.17533 7.35998C3.02568 7.26845 2.90474 7.13749 2.82606 6.98176C2.74739 6.82604 2.71409 6.65171 2.72988 6.47831C2.74568 6.30491 2.80996 6.13928 2.91551 6L4.81009 3.5C4.95538 3.30831 5.16933 3.17895 5.40799 3.1385C5.64664 3.09805 5.89189 3.14958 6.09335 3.2825L7.16127 3.98687L8.54494 1.70562C8.61086 1.59683 8.69841 1.5024 8.80228 1.42807C8.90615 1.35373 9.02418 1.30103 9.14923 1.27316C9.27429 1.24529 9.40375 1.24282 9.52979 1.26591C9.65584 1.28901 9.77583 1.33717 9.88251 1.4075L11.7771 2.6575C11.9865 2.79541 12.1319 3.00999 12.1814 3.25402C12.2309 3.49805 12.1804 3.75155 12.0411 3.95875C11.9017 4.16595 11.6849 4.30988 11.4383 4.35887C11.1917 4.40787 10.9356 4.35791 10.7262 4.22L9.65832 3.51562L8.27465 5.79687C8.20873 5.90567 8.12118 6.0001 8.01731 6.07443C7.91344 6.14877 7.7954 6.20147 7.67035 6.22934C7.5453 6.25721 7.41584 6.25968 7.28979 6.23658C7.16375 6.21349 7.04376 6.16533 6.93707 6.095L5.78833 5.33687L4.43118 7.125C4.34294 7.24143 4.22852 7.33594 4.09699 7.40102C3.96545 7.46611 3.82041 7.5 3.67335 7.5Z"
                fill="#E74694"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
              Net P&L
            </p>
            <p className="text-[18px] leading-[27px] font-semibold">
              $91,932.39{" "}
              <span className="text-[14px] leading-[21px] font-normal text-negative">
                (9.85%)
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-[251px] h-full rounded-lg p-6 gap-3 bg-card">
          <div className="flex justify-center items-center w-6 h-6 bg-card-icon rounded-md">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.27991 2.36692L5.52524 0.242505C5.46922 0.175202 5.39977 0.119389 5.32099 0.0783583C5.24222 0.0373274 5.15571 0.0119098 5.06657 0.00360497C4.8876 -0.0119355 4.70952 0.0413995 4.57124 0.151955L1.84724 2.36692H7.27991Z"
                fill="#E74694"
              />
              <path
                d="M5.73324 8.14677V7.50456C5.73324 6.82327 6.01419 6.16988 6.51428 5.68813C7.01438 5.20638 7.69266 4.93574 8.3999 4.93574H11.7332V4.29354C11.7332 4.12321 11.663 3.95986 11.538 3.83943C11.4129 3.71899 11.2434 3.65133 11.0666 3.65133H1.06657C0.889758 3.65133 0.720189 3.71899 0.595164 3.83943C0.47014 3.95986 0.399902 4.12321 0.399902 4.29354V11.3578C0.399902 11.5281 0.47014 11.6915 0.595164 11.8119C0.720189 11.9323 0.889758 12 1.06657 12H11.0666C11.2434 12 11.4129 11.9323 11.538 11.8119C11.663 11.6915 11.7332 11.5281 11.7332 11.3578V10.7156H8.3999C7.69266 10.7156 7.01438 10.4449 6.51428 9.9632C6.01419 9.48145 5.73324 8.82806 5.73324 8.14677Z"
                fill="#E74694"
              />
              <path
                d="M11.7332 6.22015H8.3999C8.04628 6.22015 7.70714 6.35547 7.45709 6.59635C7.20704 6.83722 7.06657 7.16392 7.06657 7.50456V8.14677C7.06657 8.48741 7.20704 8.81411 7.45709 9.05498C7.70714 9.29586 8.04628 9.43118 8.3999 9.43118H11.7332C11.91 9.43118 12.0796 9.36352 12.2046 9.24308C12.3297 9.12264 12.3999 8.9593 12.3999 8.78897V6.86236C12.3999 6.69203 12.3297 6.52869 12.2046 6.40825C12.0796 6.28781 11.91 6.22015 11.7332 6.22015ZM9.3999 8.46787C9.26805 8.46787 9.13915 8.43021 9.02952 8.35964C8.91989 8.28907 8.83444 8.18877 8.78398 8.07143C8.73352 7.95408 8.72032 7.82495 8.74605 7.70038C8.77177 7.5758 8.83526 7.46137 8.9285 7.37156C9.02173 7.28174 9.14052 7.22058 9.26984 7.1958C9.39916 7.17102 9.53321 7.18374 9.65502 7.23234C9.77684 7.28095 9.88096 7.36326 9.95422 7.46887C10.0275 7.57448 10.0666 7.69865 10.0666 7.82566C10.0666 7.99599 9.99633 8.15934 9.87131 8.27977C9.74628 8.40021 9.57671 8.46787 9.3999 8.46787Z"
                fill="#E74694"
              />
              <path
                d="M8.2419 2.36692H9.94657L8.1919 0.242505C8.08175 0.109141 7.92111 0.023393 7.74533 0.00412308C7.56954 -0.0151468 7.39301 0.0336403 7.25457 0.139752C7.11613 0.245863 7.02711 0.400607 7.00711 0.569941C6.9871 0.739275 7.03775 0.909329 7.1479 1.04269L8.2419 2.36692Z"
                fill="#E74694"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
              Equity
            </p>
            <p className="text-[18px] leading-[27px] font-semibold">
              {formatCurrency(metrics.equity)}{" "}
              <span className="text-[14px] leading-[21px] font-normal text-negative">
                (9.85%)
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-[251px] h-full rounded-lg p-6 gap-3 bg-card">
          <div className="flex justify-center items-center w-6 h-6 bg-card-icon rounded-md">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.73908 4.46743L8.21353 8.17028C8.06914 8.52114 8.1225 8.91486 8.3573 9.22286C8.59209 9.53086 8.97756 9.71428 9.38939 9.71428H11.3443C11.7562 9.71428 12.1417 9.53028 12.3764 9.22286C12.6112 8.91486 12.6646 8.52114 12.5202 8.17028L10.9947 4.46743V3.93886C11.1868 3.976 11.3927 4 11.6225 4C11.969 4 12.2503 3.744 12.2503 3.42857C12.2503 3.11314 11.969 2.85714 11.6225 2.85714C11.0154 2.85714 10.6908 2.62857 10.1993 2.28229C9.75603 1.96971 9.2381 1.61429 8.44644 1.38514C8.27757 0.596571 7.5148 0 6.6001 0C5.67849 0 4.91258 0.606857 4.75124 1.404C4.10586 1.61943 3.70282 1.93429 3.35188 2.21086C2.87413 2.58571 2.5301 2.85714 1.57773 2.85714C1.23119 2.85714 0.949935 3.11314 0.949935 3.42857C0.949935 3.744 1.23119 4 1.57773 4C1.80939 4 2.01342 3.98286 2.20553 3.95943V4.468L0.679983 8.17086C0.53559 8.52171 0.588952 8.91543 0.823748 9.22343C1.05854 9.53028 1.44401 9.71428 1.85584 9.71428H3.8108C4.22263 9.71428 4.6081 9.53028 4.8429 9.22286C5.07769 8.91486 5.13106 8.52114 4.98666 8.17028L3.46112 4.46743V3.56971C3.73609 3.41714 3.96022 3.24229 4.17241 3.07543C4.41788 2.88229 4.66084 2.70743 4.97662 2.56857C5.19948 2.91714 5.54917 3.18629 5.9723 3.32343V10.8571H1.57773C1.23119 10.8571 0.949935 11.1131 0.949935 11.4286C0.949935 11.744 1.23119 12 1.57773 12H11.6225C11.969 12 12.2503 11.744 12.2503 11.4286C12.2503 11.1131 11.969 10.8571 11.6225 10.8571H7.22789V3.32343C7.66484 3.18171 8.02394 2.89886 8.24492 2.53257C8.739 2.70514 9.09119 2.94629 9.43083 3.18571C9.5319 3.25714 9.63675 3.32971 9.74535 3.40114C9.74473 3.41086 9.73908 3.41886 9.73908 3.42857V4.46743ZM6.6001 2.28571C6.25418 2.28571 5.9723 2.02914 5.9723 1.71429C5.9723 1.39943 6.25418 1.14286 6.6001 1.14286C6.94601 1.14286 7.22789 1.39943 7.22789 1.71429C7.22789 2.02914 6.94601 2.28571 6.6001 2.28571Z"
                fill="#E74694"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
              Avg Win / Loss
            </p>
            <div className="flex gap-1 h-1.5">
              <div className="w-[150px] bg-positive rounded-sm"></div>
              <div className="w-[13px] bg-negative rounded-sm"></div>
            </div>
            <div className="flex w-full justify-between">
              <div className="text-[12px] leading-[18px] font-normal text-positive">
                $129
              </div>
              <div className="text-[12px] leading-[18px] font-normal text-negative">
                -29.85%
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[251px] h-full rounded-lg p-6 gap-3 bg-card">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col w-[90px] items-center gap-1">
              <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
                Win Rate
              </p>
              <p className="text-[18px] leading-[27px] font-semibold text-positive">
                {metrics.win_rate}
              </p>
            </div>
            <div className="flex justify-center h-[21px]">
              <Separator orientation="vertical" className="bg-secondary" />
            </div>
            <div className="flex flex-col w-[90px] items-center gap-1">
              <p className="text-[14px] leading-[21px] font-normal text-secondary-foreground">
                Profit Factor
              </p>
              <p className="text-[18px] leading-[27px] font-semibold">
                {metrics.profit_factor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
