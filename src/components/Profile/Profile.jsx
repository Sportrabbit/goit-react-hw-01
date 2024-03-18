import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats}) {
    return (
    <div className={css["user-container"]}>
        <div className={css["user-inform"]}>
           <img
              src={image}
              alt="User avatar"
              className={css["user-avatar"]}
            />
            <p className={css["user-name"]}>{name}</p>{""}
            <p className={css["user-email"]}>@{tag}</p>{""}
            <p className={css["user-location"]}>{location}</p>
          </div>
          <ul className={css["user-status"]}>
            <li>
              <span>Followers</span>
              <span className={css["user-act-info"]}>{stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span className={css["user-act-info"]}>{stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span className={css["user-act-info"]}>{stats.likes}</span>
            </li>
         </ul>
        </div>
    );
}